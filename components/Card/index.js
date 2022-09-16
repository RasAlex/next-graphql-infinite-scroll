import React from 'react'
import { Article } from './styles';

export const Card = React.memo(function(props) {
  const {
    name = 'Rick Sanchez',
    image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  } = props;

  return (
    <Article>
      <img src={image} alt=''/>
      <p>{name}</p>
    </Article>
  )
})
