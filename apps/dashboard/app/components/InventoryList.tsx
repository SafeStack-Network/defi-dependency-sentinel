'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Risk {
  id: string
  package: string
  severity: 'HIGH' | 'MEDIUM' | 'LOW' | 'RESOLVED'
  resolved: boolean
}

interface InventoryResponse {
  risks: Risk[]
}

export default function InventoryList() {
  const [risks, setRisks] = useState<Risk[]>([])
  const [loading, setLoading] = useState(true)

  const fetchInventory = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/inventory', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data: InventoryResponse = await response.json()
      setRisks(data.risks)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch inventory'

      // Show red error toast with auto-dismiss (5s) and Retry action
      toast.error(
        (t) => (
          <div className="flex items-center justify-between gap-4">
            <span>{errorMessage}</span>
            <button
              onClick={() => {
                toast.dismiss(t.id)
                fetchInventory()
              }}
              className="px-3 py-1 bg-white text-red-600 rounded font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Retry
            </button>
          </div>
        ),
        {
          duration: 5000, // 5 second auto-dismiss
          style: {
            background: '#991b1b',
            color: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
          },
        }
      )
    }
  }

  useEffect(() => {
    fetchInventory()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-400">Loading inventory...</div>
      </div>
    )
  }

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'HIGH':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'MEDIUM':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'LOW':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'RESOLVED':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {risks.map((risk) => (
        <div
          key={risk.id}
          className={`bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors shadow-lg ${
            risk.resolved ? 'opacity-60' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg">{risk.package}</h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityStyles(
                risk.severity
              )}`}
            >
              {risk.severity}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">{risk.id}</p>
          <button
            className={`w-full py-2 rounded-lg font-medium transition-colors ${
              risk.resolved
                ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
            disabled={risk.resolved}
          >
            {risk.resolved ? 'Funds Unlocked' : 'Resolve & Claim Drips'}
          </button>
        </div>
      ))}
    </div>
  )
}
