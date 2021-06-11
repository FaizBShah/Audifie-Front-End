import React from 'react';
import Cards from '../../Cards';
import EmptyArea from '../../../commons/EmptyArea';
import isEmpty from '../../../../utils/validation/is-empty';

function AllDocuments({ cards, setIsPlayerActive }) {
  return (
    <>
      {isEmpty(cards) ? (<EmptyArea />) : <Cards cards={cards} setIsPlayerActive={setIsPlayerActive} />}
    </>
  )
}

export default AllDocuments;