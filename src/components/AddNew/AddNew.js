import React, { useState } from 'react';
import { addNewItem } from '../../api/api';
import { ItemForm } from '../ItemForm/ItemForm';
import './AddNew.css';
const AddNew = () => {
  const [data, setData] = useState({});

  const handleAdd = async () => {
    await addNewItem(data);
  };

  return (
    <div className="add-new-container">
      <ItemForm editMode={true} onDataChange={(newData) => setData(newData)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddNew;
