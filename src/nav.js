import React from 'react';

function Nav({ onFilter, onSort }) {
  return (
    <nav>
      {/* Filter and sort buttons */}
      <button onClick={() => onFilter(true)}>Greased Hogs</button>
      <button onClick={() => onFilter(false)}>All Hogs</button>
      <button onClick={() => onSort('name')}>Sort by Name</button>
      <button onClick={() => onSort('weight')}>Sort by Weight</button>
    </nav>
  );
}

export default Nav;