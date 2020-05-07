import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

interface ICardListProps {
  robots: Array<IRobot>;
}

const CardList: React.SFC<ICardListProps> = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card
          key={i}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
}

export default CardList;