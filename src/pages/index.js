import React from "react"
import useTournament from "app/useTournament"
import toast from "react-hot-toast/headless"
import Toast from "src/components/Toast"

const Index = () => {
  const query = useTournament()
  console.log(query.data)
  return (
    <div>
      <button
        onClick={() => {
          toast({
            title: "Success",
            description: "tonehsanotheus aasotnhu asotenhu ",
          })
        }}
      >
        toast
      </button>
      <Toast title="Logout Successful" description="You have been logged out" />
    </div>
  )
}

export default Index
