xexport default function RiskInventory() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Risk Inventory
        </h1>
        <p className="text-gray-400 mt-2">Drips v2 Security Splits Dashboard</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg">alloy-rs</h3>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">HIGH</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">OSV-2026-001</p>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
            Resolve &amp; Claim Drips
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors shadow-lg opacity-60">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg">tokio</h3>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">RESOLVED</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">GHSA-xxxx-yyyy</p>
          <div className="w-full py-2 bg-gray-800 text-gray-400 rounded-lg font-medium text-center">
            Funds Unlocked
          </div>
        </div>
      </div>
    </main>
  )
}
