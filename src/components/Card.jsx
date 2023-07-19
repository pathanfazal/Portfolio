import React from 'react'
import './card.css'
const Card = ({childern, className, onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {childern}
    </article>
  )
}

export default Card