import React from "react"
import { navigate } from "gatsby"
import { useAuthDeleteUser } from "@react-query-firebase/auth"
import { auth } from "src/app"
import toast from "src/utils/toast"

const ProfileDelete = () => {
  const mutation = useAuthDeleteUser(auth, {
    onSuccess: () => {
      navigate("/")
      toast({
        style: "success",
        title: "Deletion Successful",
        description: "Your account has now been deleted",
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

export default ProfileDelete
