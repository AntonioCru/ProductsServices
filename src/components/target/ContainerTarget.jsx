import React from 'react'

import './containerTarget.css'

export default function ContainerTarget({ children }) {
  return (
    <article className="section__targets__products-services">
      {children}
    </article>
  )
}
