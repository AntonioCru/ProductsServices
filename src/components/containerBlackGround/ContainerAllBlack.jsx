import React from 'react'

import './containerAllBlackGround.css'

// eslint-disable-next-line react/prop-types
export default function ContainerAllBlack({ children, className }) {
  return <section className={className}>{children}</section>
}
