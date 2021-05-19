import React, { useState } from 'react';
import Cards from '../../Cards';
import EmptyArea from '../../../commons/EmptyArea';

function AllDocuments() {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <>
      {isEmpty ? (<EmptyArea />) : <Cards />}
    </>
  )
}

export default AllDocuments;