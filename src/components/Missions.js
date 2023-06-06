import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="list-missions">
          {
            missions.map((element) => {
              const { name, year, country, destination } = element;
              return (
                <MissionCard
                  key={ name + year }
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                />
              );
            })
          }
        </section>
      </div>
    );
  }
}

export default Missions;
