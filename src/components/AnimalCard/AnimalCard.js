import React from 'react';
import PropTypes from 'prop-types';

const AnimalCard = (props) => {
  const { diet, name, size } = props;
  return (
    <div>
      <h3>{name}</h3>
      <div>{size} kg</div>
      <div>{diet.join(', ')}.</div>
    </div>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired
}

export default AnimalCard
