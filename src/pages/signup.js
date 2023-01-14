import React from "react"
import { useForm } from "react-hook-form"
import Layout from "src/components/Layout"

const Signup = () => {
  const { register, handleSubmit } = useForm()
  return (
    <Layout className="flex items-start justify-center bg-slate-200 dark:bg-slate-900">
      <div className="bg-default m-12 flex w-full max-w-4xl flex-col gap-12 rounded-xl p-12">
        <FormItem
          title="SplashTag"
          desc="Enter your full Splash Tag, including the hashtag and the 4 numbers at the end."
        >
          <input type="text" autoComplete="off" className="w-full" />
          {/* require #1234 at the end */}
        </FormItem>
        <Border />
        <FormItem
          title="Friend-Code"
          desc="Enter your full friend-code, this won't be shared publically."
        >
          <input type="text" autoComplete="off" className="w-full" />
          {/* react onChange : take input, take first 12 didgets, add sw--- */}
        </FormItem>
        <Border />
        <FormItem title="Rank" desc="very fancy rank thing.">
          <input type="text" autoComplete="off" className="w-full" />
          {/* first check s+0, require at least 1 x power, suggest previous season */}
        </FormItem>
        <Border />
        <FormItem
          title="Weapon Pool"
          desc="List up to 5 weapons that you would be comfortable playing during the tournament."
        >
          <input type="text" autoComplete="off" className="w-full" />
          {/* downshift usemultiselect */}
        </FormItem>
        <Border />
        <FormItem
          title="Competitive Experience"
          desc="Put in your relevant competitive experience, such as tournament placements, how long you've been playing competitively, your LUTI division, etc."
        >
          <textarea type="text" autoComplete="off" className="w-full" />
        </FormItem>
        <Border />
        <FormItem
          title="start.gg User Slug"
          desc="The 8 characters that are listed on your start.gg profile page."
        >
          <input type="text" autoComplete="off" className="w-full" />
          {/* max 8 characters, remove all non hexadecimal */}
        </FormItem>
        <Border />
        signup
      </div>
    </Layout>
  )
}

const FormItem = ({ title, desc, children }) => (
  <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0">
    <div className="flex-[3_3_0%]">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="text-xl text-slate-700 dark:text-slate-300">{desc}</div>
    </div>
    <div className="flex-1"></div>
    <div className="flex-[3_3_0%]">{children}</div>
  </div>
)

const Border = () => (
  <div className="border-t-2 border-slate-300 dark:border-slate-800" />
)

export default Signup
