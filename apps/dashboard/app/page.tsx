'use client'

import { Toaster } from 'react-hot-toast'
import InventoryList from './components/InventoryList'

export default function RiskInventory() {
  return (
    <>
      <Toaster position="top-right" />
      <main className="p-8 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Risk Inventory
          </h1>
          <p className="text-gray-400 mt-2">Drips v2 Security Splits Dashboard</p>
        </header>
        <InventoryList />
      </main>
    </>
  )
}
