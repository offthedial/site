import React from "react"
import { Helmet } from "react-helmet"

import logo from "src/static/logo.svg"
import banner from "src/static/banner.png"
import favicon from "src/static/favicon.svg"

const Layout = ({ children, helmet, className = "" }) => (
  <div className="flex min-h-screen flex-col">
    <Nav />
    <main className={`flex-1 ${className}`}>{children}</main>
    <Footer />
    <CustomHelmet {...helmet} />
  </div>
)

const Nav = () => <nav></nav>

const Footer = () => <footer></footer>

const CustomHelmet = ({ title, description, image, creator }) => {
  const defaults = {
    title: "Off the Dial",
    description:
      "Off the Dial is a unique tournament organisation for Splatoon 3, dedicated to providing fresh tournament opportunities for free agents.",
  }

  const metaTitle = title ? `${title} - ${defaults.title}` : defaults.title
  const metaDesc = description
    ? `${description} - ${defaults.description}`
    : defaults.description
  const [metaImage, card] = title
    ? [image || logo, "summary"]
    : [banner, "summary_large_image"]

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <description>{defaults.description}</description>
      <link rel="icon" type="image/svg" sizes="64x64" href={favicon} />
      <meta name="theme-color" content="#5d9194" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content={card} />
      <meta name="twitter:site" content="@Off_The_Dial" />
      {creator && <meta name="twitter:creator" content={creator} />}
    </Helmet>
  )
}

export default Layout
