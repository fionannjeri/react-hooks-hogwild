import React from 'react';
import HogTile from './hogtile';

function HogList({ hogs, onHide }) {
  return (
    <div>
      {hogs.map((hog) => (
        <HogTile key={hog.id} hog={hog} onHide={onHide} />
      ))}
    </div>
  );
}

export default HogList;