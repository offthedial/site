const Title = ({ title, children }) => (
  <div className="py-14 text-center text-xl">
    <h1 className="text-3xl font-bold leading-none">{title}</h1>
    <div className="max-w-3xl text-slate-500 dark:text-slate-400">
      {children}
    </div>
  </div>
)

export default Title
