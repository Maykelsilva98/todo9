import React from 'react'
import S from './Link1.module.css'

const Link1 = ({texto, link}) => {
  return (
    <div>
        <a href={link} className={S.link1}>
            {texto}
        </a>
    </div>
  )
}

export default Link1