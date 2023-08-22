/* eslint-disable react/prop-types */
import React from 'react'

import './containerFormulary.css'

export default function ContainerFormulary({ children, className }) {
  return <article className={className}>{children}</article>
}
