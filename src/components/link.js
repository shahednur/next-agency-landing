import React from 'react'
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui'
import NextLink from 'next/link';

const Link = ({ path, label, children, ...rest })=>{
  return (
    <NextLink href={path} >
        <A {...rest}>{children ? children: label }</A>
    </NextLink>
  )
}

const NavLink =({ path, label, children, ...rest }) =>{
  return (
    <NextLink href={path} >
        <MenuLink {...rest}>{children ? children: label }</MenuLink>
    </NextLink>
  )
}

export default Link;
export { NavLink };