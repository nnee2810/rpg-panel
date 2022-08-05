interface ProgressProps {
  steps: string[]
  currentStep: number
}

export default function Progress({ steps, currentStep }: ProgressProps) {
  return (
    <div className="relative shadow-lg">
      <div className="font-semibold">
        {currentStep > steps.length ? "Hoàn thành 🎉" : steps[currentStep - 1]}
      </div>
      <div className="mt-1 h-3 bg-slate-600 rounded-md" />
      <div
        style={{
          width:
            currentStep > steps.length
              ? "100%"
              : ((currentStep - 1) / steps.length) * 100 + "%",
        }}
        className="absolute left-0 bottom-0 h-3 bg-emerald-500 rounded-md shadow-lg shadow-emerald-400/75 transition-all duration-500"
      />
    </div>
  )
}
