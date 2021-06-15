import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaTelegram } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "#About",
    title: "About",
  },
  {
    path: "#Dex",
    title: "Dex",
  },
  {
    path: "#Features",
    title: "Features",
  },
  {
    path: "#Timeline",
    title: "Timeline",
  },
]

export const socialMenuItems = [
  {
    icon: <FaTelegram />,
    url: "https://www.telegram.org",
    name: "Telegram",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/CardDexAce",
    name: "Twitter",
  },
]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]
