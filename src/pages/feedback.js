import React, { useRef, useEffect } from "react"

import * as typeformEmbed from "@typeform/embed"

const Feedback = () => {
  const typeformRef = useRef(null)

  useEffect(() => {
    typeformEmbed.makeWidget(
      typeformRef.current,
      "https://form.typeform.com/to/Mc9Fg3sy",
      {
        hideScrollbars: true,
        hideFooter: true,
        hideHeaders: true,
        opacity: 100,
      }
    )
  }, [typeformRef])

  return <div ref={typeformRef} style={{ height: "100vh", width: "100%" }} />
}

export default Feedback
