import React from "react"
import * as Chakra from "@chakra-ui/react"

const Mention = ({ children }) => (
  <Chakra.Text textStyle="mention">{children}</Chakra.Text>
)

export default Mention
