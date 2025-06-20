import React from 'react';
import './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
