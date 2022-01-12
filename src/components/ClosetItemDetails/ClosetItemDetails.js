import React, { useState } from 'react';
import './ClosetItemDetails.css';
import { ReactComponent as DeleteIcon } from '../../assets/trash-alt-solid.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-solid.svg';
import { ReactComponent as CheckIcon } from '../../assets/check-square-regular.svg';
import { deleteItemFromServer, updateItem } from '../../api/api';
import { ItemForm } from '../ItemForm/ItemForm';

const ClosetItemDetails = ({ details, deleteItem, refetchItems }) => {
  const [editMode, setEditMode] = useState(false);

  const handleDelete = async () => {
    await deleteItemFromServer(details.id);
    deleteItem(details.id);
  };

  const [data, setData] = useState(details);

  const handleEdit = async () => {
    await updateItem(details.id, data);
    setEditMode(false);
    refetchItems();
  };

  return (
    <div className="details-container">
      <div className="image-wrapper-details">
        <img className="details-image" src={data.img} alt="" />
      </div>

      <div className="details-wrapper">
        <ItemForm
          editMode={editMode}
          details={data}
          onDataChange={(newData) => setData(newData)}
        />
        <div className="icons">
          <DeleteIcon width={30} height={30} onClick={handleDelete} />
          {editMode ? (
            <CheckIcon width={30} height={30} onClick={handleEdit} />
          ) : (
            <EditIcon
              width={30}
              height={30}
              onClick={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClosetItemDetails;
