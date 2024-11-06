import React, { useState } from 'react';

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="hog-tile">
      <img src={hog.image} alt={hog.name} onClick={() => setShowDetails(!showDetails)} />
      <h2>{hog.name}</h2>
      {showDetails && (
        <div className="hog-details">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal: {hog.highest_medal}</p>
          <button onClick={() => onHide(hog.id)}>Hide</button>
        </div>
      )}
    </div>
  );
}

export default HogTile;