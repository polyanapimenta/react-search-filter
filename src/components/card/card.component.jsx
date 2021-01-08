import React from 'react'
import './card.styles.css'

export const Card = props => {
  return (
    <div className="card-container">
      <img alt="character" src={`https://robohash.org/${props.character.id}?set=set4&size=180x200`} />
      <h2>{props.character.username}</h2>
      <p>{props.character.website}</p>
    </div>
  )
}