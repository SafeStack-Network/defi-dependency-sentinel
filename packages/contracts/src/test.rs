#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Env};

#[test]
fn test_init_and_trigger() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register_contract(None, DripsSentinel);
    let client = DripsSentinelClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let drips_driver = Address::generate(&env);
    let maintainer = Address::generate(&env);

    client.init(&owner, &drips_driver);
    client.trigger_drip(&maintainer, &1000);
}
