import { Link } from "gatsby"
import React from "react"
import Layout from "src/components/Layout"

const Page404 = () => {
  return (
    <Layout className="flex items-center">
      <div className="mx-auto flex w-full max-w-4xl flex-col-reverse items-center gap-12 p-8 md:flex-row md:p-12">
        <div className="flex-1">
          <code className="text-6xl tracking-wide">404</code>
          <p className="text-3xl text-slate-600 dark:text-slate-400">
            There's nothing here...
          </p>
          <Link to="/">
            <button className="mt-6 rounded-lg border-2 border-slate-200 py-2.5 px-5 text-lg font-medium hover:bg-slate-200 dark:border-slate-700  hover:dark:bg-slate-700">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="h-12 w-12 bg-slate-500"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Page404
