/* eslint-disable react/prop-types */
import React from 'react'

import './containerTarget.css'

export default function ContainerTarget({ children, isNewClass }) {
  return (
    <article
      className={`section__targets__products-services ${
        isNewClass ? 'change-grid' : ''
      }`}
    >
      {children}
    </article>
  )
}
