import React from 'react';
import Cards from '../../Cards';
import EmptyArea from '../../../commons/EmptyArea';
import isEmpty from '../../../../utils/validation/is-empty';

function Favourites({ cards }) {
  return (
    <>
      {isEmpty(cards.filter(card => card.favorite)) ? (<EmptyArea />) : <Cards cards={cards.filter(card => card.favorite)} />}
    </>
  )
}

export default Favourites;