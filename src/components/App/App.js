import AnimalCard from '../AnimalCard/AnimalCard';
import data from './data';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      {data.map(animal => (
        <AnimalCard
          diet={animal.diet}
          key={animal.scientificName}
          name={animal.name}
          size={animal.size}
        />)
      )}
    </div>
  );
}

export default App;
