import React from 'react'
import Link from "next/link";

const navMenu = [
  {title: "Home", href: "/"},
  {title: "About Us", href: "/about"},
  {title: "Products", href: "/product"},
]
const Links = () => {

  return (
    navMenu && (
      navMenu.map((link) => {
        return (
          <Link href={link.href} key={link.title}>{link.title}</Link>
        )
      })
    )
  )
}
export default Links
