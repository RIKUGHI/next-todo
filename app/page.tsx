import { Suspense } from "react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <Suspense fallback={<h1 className="text-red-600">Loading...</h1>}>
        <CompA />
      </Suspense>
      <Suspense fallback={<h1 className="text-blue-600">Loading...</h1>}>
        <CompB />
      </Suspense>
    </div>
  )
}

const CompA = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(""), 1000))
  return <h1>Comp A</h1>
}

const CompB = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(""), 2000))
  return <h1>Comp B</h1>
}
