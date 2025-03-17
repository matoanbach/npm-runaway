"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Clover, TicketPercent } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type ProductExpiry = {
  name: string
  expiryDescription: string
  dateRange: string
  duration: string
  progress: number
}

type Batch = {
  id: string
  label: string
  products: ProductExpiry[]
}

export default function GanttChartComponent({ batches, }: { batches: Batch[] }) {
  // Local state to track selected batch. When batches prop changes, reset to first.
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(batches[0] || null)

  useEffect(() => {
    setSelectedBatch(batches[0] || null)
  }, [batches])

  return (
    <div className="bg-white dark:bg-black rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Expiry Tracking</h2>
      </div>

      {/* Main Content: Left Column for Batches, Right Column for Selected Batch's Product Expiry Details */}
      <div className="flex">
        {/* Left Column: Batch List */}
        <div className="w-40 border-r border-gray-200 dark:border-gray-800 p-4 space-y-4">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className={`cursor-pointer p-2 rounded transition-colors ${selectedBatch?.id === batch.id
                ? "bg-primary text-white dark:text-black"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              onClick={() => setSelectedBatch(batch)}
            >
              {batch.label}
            </div>
          ))}
        </div>
        {/* Right Column: Expiry Details for Selected Batch */}
        <div className="flex-1 p-6">
          <div className="space-y-4">
            {selectedBatch?.products.map((product) => (
              <div key={product.name} className="grid grid-cols-4">
                <div className="font-medium">
                  {product.expiryDescription}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {product.dateRange}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {product.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={product.progress} className={`flex-1 ${product.progress >= 80 ? "bg-red-400" : "bg-green-200"}`} />
                  <div className="text-sm font-medium">{product.progress}%</div>

                  <div className="flex justify-center gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild><TicketPercent /></TooltipTrigger>
                        <TooltipContent>
                          <p>Apply Discounts</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild><Clover /></TooltipTrigger>
                        <TooltipContent>
                          <p>Donate</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Icon components remain the same
function DownloadIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function MaximizeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}
