import React, { useState } from 'react';

function HogForm({ onAddHog }) {
  const [newHog, setNewHog] = useState({
    name: '',
    image: '',
    specialty: '',
    weight: 0,
    greased: false,
    highest_medal: '',
  });

  const handleChange = (event) => {
    setNewHog({ ...newHog, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddHog(newHog);
    setNewHog({
      name: '',
      image: '',
      specialty: '',
      weight: 0,
      greased: false,
      highest_medal: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for adding a new hog */}
      <input type="text" name="name" placeholder="Name" value={newHog.name} onChange={handleChange} />
      {/* ...other form fields */}
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;