import React, { useState } from 'react';
import Nav from './components/Nav.js';
import HogList from './hoglist.js';
import HogForm from './hogform.js';
import porkerData from './porkers_data.js';
import HogTile from './hogtile.js';

function App() {
  const [hogs, setHogs] = useState(porkerData);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [sortedHogs, setSortedHogs] = useState(filteredHogs);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const handleFilter = (filter) => {
    // Filter hogs based on the given filter criteria
    const filtered = hogs.filter((hog) => hog.greased === filter);
    setFilteredHogs(filtered);
    setSortedHogs(filtered);
  };

  const handleSort = (sort) => {
    // Sort the filtered hogs based on the given sorting criteria
    const sorted = [...filteredHogs].sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'weight') {
        return a.weight - b.weight;
      }
    });
    setSortedHogs(sorted);
  };

  const handleHide = (id) => {
    // Hide a hog by adding its ID to the hiddenHogs array
    setHiddenHogs([...hiddenHogs, id]);
  };

  const handleAddHog = (newHog) => {
    // Add a new hog to the list
    setHogs([...hogs, newHog]);
  };

  return (
    <div>
      <Nav onFilter={handleFilter} onSort={handleSort} />
      <HogList hogs={sortedHogs.filter(hog => !hiddenHogs.includes(hog.id))} onHide={handleHide} />
      <HogForm onAddHog={handleAddHog} />
    </div>
  );
}

export default App;