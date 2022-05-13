import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline="Planetas" />
        {
          planets.map((item) => (
            <PlanetCard
              key={ item.name }
              planetName={ item.name }
              planetImage={ item.image }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
