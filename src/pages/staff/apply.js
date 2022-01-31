import React, { useRef, useEffect } from "react"

import * as typeformEmbed from "@typeform/embed"

const StaffApply = () => {
  const typeformRef = useRef(null)

  useEffect(() => {
    typeformEmbed.makeWidget(
      typeformRef.current,
      "https://form.typeform.com/to/bpH2Ai1E",
      {
        buttonText: "Let's start",
        hideScrollbars: true,
        hideFooter: true,
        hideHeaders: true,
        opacity: 100,
      }
    )
  }, [typeformRef])

  return <div ref={typeformRef} style={{ height: "100vh", width: "100%" }} />
}

export default StaffApply
