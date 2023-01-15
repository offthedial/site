import React from "react"

import { chakra } from "@chakra-ui/react"
import SEO from "./SEO"
import NavBar from "./NavBar"
import Footer from "./Footer"
import leftCon from "../../static/left-construction.png"
import rightCon from "../../static/right-construction.png"

const Layout = ({ pageTitle, meta, main, children, ...rest }) => (
  <chakra.div className="layout" {...rest}>
    <SEO title={pageTitle} {...meta} />
    <NavBar />
    <main style={{ ...main, position: "relative" }}>
      <div
        style={{
          zIndex: 3,
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          maxWidth: "20vw",
          width: "210px",
          height: "100%",
          backgroundImage: `url('${leftCon}')`,
          backgroundPositionX: "right",
        }}
      ></div>
      <div
        style={{
          zIndex: 3,
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          maxWidth: "20vw",
          width: "215px",
          height: "100%",
          backgroundImage: `url('${rightCon}')`,
          backgroundPositionX: "left",
        }}
      ></div>
      <div>
        {children}
        <Footer />
      </div>
    </main>
  </chakra.div>
)

export default Layout
