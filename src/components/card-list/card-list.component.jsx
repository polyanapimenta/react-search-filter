import React from 'react'
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = props => {
  return (
    <>
    {props.characters == false ? (
      <p>🧐 Ops! nothing was found.</p>
      ) : (
      <div className="card-list">
        {props.characters.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    )}
    </>
  )
}