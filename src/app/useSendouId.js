import { useQuery } from "@tanstack/react-query"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

/**
 * Resolve a discord id to a sendou.ink user id.
 *
 * `/user/{identifier}/ids` is the one endpoint on sendou.ink's public API that
 * takes no token, so this is safe to call straight from the browser.
 * Returns null when the discord account has no sendou.ink profile linked.
 */
export const fetchSendouId = async discordId => {
  const resp = await fetch(`https://sendou.ink/api/user/${discordId}/ids`)
  if (resp.status === 404) return null
  if (!resp.ok) throw new Error("Couldn't reach sendou.ink, try again later.")
  const { id } = await resp.json()
  return id
}

const useSendouId = () => {
  const [authState] = useAuthState(auth)
  return useQuery(["sendouId"], () => fetchSendouId(authState.uid), {
    enabled: !!authState,
    staleTime: Infinity,
    retry: false,
  })
}

export default useSendouId
