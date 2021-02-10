import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

const AnimalCard = ({ name, size, ...props }) => {
  return (
    <>
      {/* <div style={{ textAlign: "center", display: 'flex', flexDirection: "column", width: '30%', backgroundColor: 'gold', borderRadius: "4px" }}>
        <h3>{name}</h3>
        <div>{size} kg</div>
        <AnimalDetails {...props} />
      </div> */}
      <Card
        title="Animal"
        details={
          <AnimalDetails
            {...props}
          />
        }>
        <h3>{name}</h3>
        <div>{size}kg</div>
      </Card>
    </>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default AnimalCard
