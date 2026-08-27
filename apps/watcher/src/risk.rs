use serde::{Deserialize, Serialize};

/// Inputs required to compute a Risk-to-Drip score for a vulnerable dependency.
#[derive(Debug, Clone, Deserialize)]
pub struct RiskInput {
    pub cve_id: String,
    /// CVSS base score (0.0-10.0).
    pub cvss: f64,
    /// USD value of protocol TVL exposed through the vulnerable dependency.
    pub tvl_exposure: f64,
    /// USD/period currently streamed to the maintainer via Drips.
    pub current_drip_rate: f64,
}

#[derive(Debug, Clone, Serialize)]
pub struct RiskScore {
    pub cve_id: String,
    pub score: f64,
}

/// Risk-to-Drip formula: (CVSS * TVL_Exposure) / Current_Drip_Rate.
///
/// A `current_drip_rate` of zero means the maintainer receives no funding at
/// all, which is the highest-risk state Sentinel can flag. Rather than divide
/// by zero, that case is treated as maximal risk.
pub fn calculate_risk_score(input: &RiskInput) -> RiskScore {
    let score = if input.current_drip_rate > 0.0 {
        (input.cvss * input.tvl_exposure) / input.current_drip_rate
    } else {
        f64::MAX
    };

    RiskScore {
        cve_id: input.cve_id.clone(),
        score,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn computes_formula_correctly() {
        let input = RiskInput {
            cve_id: "OSV-2026-001".into(),
            cvss: 9.0,
            tvl_exposure: 5_000_000.0,
            current_drip_rate: 100.0,
        };
        let result = calculate_risk_score(&input);
        assert_eq!(result.score, 450_000.0);
        assert_eq!(result.cve_id, "OSV-2026-001");
    }

    #[test]
    fn higher_cvss_increases_risk() {
        let base = RiskInput {
            cve_id: "X".into(),
            cvss: 4.0,
            tvl_exposure: 1_000.0,
            current_drip_rate: 10.0,
        };
        let higher = RiskInput {
            cvss: 8.0,
            ..base.clone()
        };
        assert!(calculate_risk_score(&higher).score > calculate_risk_score(&base).score);
    }

    #[test]
    fn higher_drip_rate_decreases_risk() {
        let base = RiskInput {
            cve_id: "X".into(),
            cvss: 6.0,
            tvl_exposure: 10_000.0,
            current_drip_rate: 50.0,
        };
        let better_funded = RiskInput {
            current_drip_rate: 500.0,
            ..base.clone()
        };
        assert!(calculate_risk_score(&better_funded).score < calculate_risk_score(&base).score);
    }

    #[test]
    fn zero_drip_rate_is_maximally_risky() {
        let input = RiskInput {
            cve_id: "OSV-2026-002".into(),
            cvss: 7.0,
            tvl_exposure: 1_000.0,
            current_drip_rate: 0.0,
        };
        assert_eq!(calculate_risk_score(&input).score, f64::MAX);
    }
}
