import {  LucideLoaderCircle } from "lucide-react"




function spinner() {
  return (
    <div className="flex items-center justify-center flex-1 flex-col  p-4">
      <LucideLoaderCircle className="animate-spin h-10 w-10" />
    </div>
  )
}

export default spinner