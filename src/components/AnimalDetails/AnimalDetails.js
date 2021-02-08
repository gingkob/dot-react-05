import React from 'react';
import PropTypes from "prop-types";
import './AnimalDetails.css';

const convertFood = (food) => {
  switch (food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
    default:
      return '🌱';
  }
}

const AnimalDetails = ({ scientificName, diet }) => {
  return (
    <div className='animal-details'>
      <h4>Details:</h4>
      <p> Scientific Name: <br /><h4>{scientificName}</h4></p>
      <p>
        Diet: {diet.map(item => convertFood(item)).join(' ')}
      </p>
    </div>
  )
}

AnimalDetails.propTypes = {
  scientificName: PropTypes.string.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default AnimalDetails
