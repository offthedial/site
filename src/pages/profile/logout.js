import React from "react"
import { navigate } from "gatsby"
import { useAuthSignOut } from "@react-query-firebase/auth"
import { auth } from "src/app"
import toast from "src/utils/toast"

const ProfileLogout = () => {
  const mutation = useAuthSignOut(auth, {
    onSuccess: () => {
      navigate("/")
      toast({
        style: "success",
        title: "Logout Successful",
        description: "You are now logged out",
      })
    },
    onError: error => {
      toast({
        style: "error",
        title: error.name,
        description: error.message,
      })
    },
  })

  React.useEffect(() => {
    mutation.mutate()
  }, [mutation])

  return null
}

export default ProfileLogout
