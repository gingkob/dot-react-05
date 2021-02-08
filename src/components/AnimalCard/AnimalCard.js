import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

const AnimalCard = (props) => {
  const { diet, name, size } = props;
  return (
    <div style={{ textAlign: "center", display: 'flex', flexDirection: "column", width: '30%' }}>
      <h3>{name}</h3>
      <div>{size} kg</div>
      <AnimalDetails diet={diet} />
    </div>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired
}

export default AnimalCard
