import { Link } from "gatsby"
import React from "react"
import Layout from "src/components/Layout"
import confusion from "src/static/confusion.webp"

const Page404 = () => {
  return (
    <Layout className="flex items-center">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-12 p-8 md:flex-row md:gap-16 md:p-12">
        <div className="flex items-center justify-center">
          <img src={confusion} alt="" className="max-h-56 sm:max-h-64" />
        </div>
        <div>
          <code className="text-5xl tracking-wide sm:text-6xl">404</code>
          <p className="text-2xl text-slate-600 dark:text-slate-400 sm:text-3xl">
            There's nothing here...
          </p>
          <Link to="/">
            <button className="mt-6 rounded-lg border-2 border-slate-200 py-2.5 px-5 text-lg font-medium hover:bg-slate-200 dark:border-slate-700 hover:dark:bg-slate-700">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Page404
