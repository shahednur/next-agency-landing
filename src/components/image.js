import React from 'react'
import { Image as Img } from 'theme-ui'

const image = ({src, ...rest}) => {
  return <Img src={src} {...rest} />
}

export default image