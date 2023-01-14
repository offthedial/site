import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "utils/theme"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import logo from "src/static/logo.svg"
import banner from "src/static/banner.webp"
import favicon from "src/static/favicon.svg"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"
import clsx from "clsx"
import useDiscord from "src/app/useDiscord"

const Layout = ({ children, helmet, className = "" }) => (
  <>
    <CustomHelmet {...helmet} />
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className={clsx("flex-1", className)}>{children}</main>
      <Footer />
    </div>
  </>
)

const Nav = () => (
  <nav className="flex h-16 items-stretch justify-end gap-6 bg-otd-slate p-3 text-center font-medium text-slate-100">
    <Link to="/" className="mr-auto">
      <StaticImage
        src="../static/title-sm.webp"
        alt="Off the Dial"
        placeholder="none"
        height={64 - 12 * 2}
        layout="fixed"
        className="sm:hidden"
      />
      <StaticImage
        src="../static/title.webp"
        alt="Off the Dial"
        placeholder="none"
        height={64 - 12 * 2}
        layout="fixed"
        className="hidden sm:block"
      />
    </Link>
    <Link className="hidden self-center md:block" to="/idtga">
      It's Dangerous to go Alone
    </Link>
    <div className="hidden md:block">
      <DiscordJoin className="h-full" />
    </div>
    <Avatar className="h-10 w-10" />
    <DropdownMenu.Root>
      <Burger />
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className="min-w-0 md:hidden">
          <div className="mt-6 flex max-w-[calc(100vw_-_24px)] flex-wrap items-center justify-center gap-6 rounded-lg bg-otd-slate p-3 text-center font-medium text-slate-100 shadow-lg">
            <DropdownMenu.Item>
              <Link to="/idtga">It's Dangerous to go Alone</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <DiscordJoin />
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </nav>
)

const Burger = () => (
  <DropdownMenu.Trigger asChild>
    <button className="flex aspect-square h-full items-center justify-center rounded-lg border-2 border-slate-100/25 text-slate-100/75 hover:bg-slate-100/10 md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </DropdownMenu.Trigger>
)

export const DiscordSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    className={className}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
)

const DiscordJoin = ({ className }) => (
  <Link
    to="/discord"
    className={
      "flex items-center rounded-lg border-2 border-slate-100/25 px-3 py-2 hover:bg-[#5865F2] " +
      className
    }
  >
    <DiscordSvg className="h-4 max-h-4 w-4 text-slate-100/75" />
    <p className="ml-3 mr-2.5 font-medium">Discord</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill="currentColor"
      className="h-4 max-h-4 w-4 text-slate-100/75"
    >
      <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  </Link>
)

export const Avatar = ({ className }) => {
  const discord = useDiscord()
  return (
    <Link
      to="/profile"
      className={clsx(
        "relative flex-shrink-0 rounded-full bg-slate-100 text-otd-slate",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute inset-0"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          clipRule="evenodd"
        />
      </svg>
      {discord.data && (
        <img
          src={discord.data.avatarUrl}
          className="absolute inset-0 rounded-full shadow-inner"
          alt="Avatar"
        />
      )}
    </Link>
  )
}

const Footer = () => (
  <footer className="flex flex-col items-center gap-8 bg-slate-200 py-8 px-4 text-slate-500 dark:bg-slate-900">
    <div className="flex w-full max-w-xl items-center justify-evenly text-lg">
      <Link className="hover:underline" to="/faq">
        FAQ
      </Link>
      <Link className="hover:underline" to="/posts">
        Posts
      </Link>
      <Link className="hover:underline" to="/staff">
        Staff
      </Link>
      <Link className="hover:underline" to="/bot">
        Bot
      </Link>
      <Link className="hover:underline" to="/terms">
        Terms
      </Link>
      <a className="hover:underline" href="https://assets.otd.ink/">
        Assets
      </a>
      <ThemePicker />
    </div>
    <div className="flex w-full max-w-sm items-center justify-evenly text-slate-400 dark:text-slate-600">
      <Link to="/patreon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-5 hover:text-[#ff424d]"
        >
          <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z" />
        </svg>
      </Link>
      <Link to="/twitch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-5 hover:text-[#9146ff]"
        >
          <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
        </svg>
      </Link>
      <Link to="/twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-5 hover:text-[#1da1f2]"
        >
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
      </Link>
      <Link to="/youtube">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
          className="h-5 hover:text-[#ff0000]"
        >
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      </Link>
      <Link to="/github">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          fill="currentColor"
          className="h-5 hover:text-[#161b22] dark:hover:text-[#f0f6fc]"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </Link>
    </div>
    <p className="text-center text-slate-400 dark:text-slate-600">
      Built by ...,{" "}
      <a
        className="text-slate-500 hover:underline"
        href="https://github.com/offthedial/site"
      >
        source code
      </a>
      .
    </p>
  </footer>
)

const ThemePicker = () => {
  const [theme, setTheme] = useTheme()
  return (
    <button
      className="rounded-lg p-2.5 hover:bg-slate-300 dark:hover:bg-slate-800"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark")
      }}
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      )}
    </button>
  )
}

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
