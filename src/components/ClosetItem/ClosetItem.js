import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ClosetItem.css';
import ClosetItemDetails from '../ClosetItemDetails/ClosetItemDetails';

const ClosetItem = ({ item, deleteItem, refetchItems }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="box">
      <div className="image-wrapper">
        <img src={item.img} alt="" onClick={() => setShowDetails(true)} />
      </div>
      <Modal isOpen={showDetails} closeModal={() => setShowDetails(false)}>
        <ClosetItemDetails
          details={item}
          deleteItem={deleteItem}
          refetchItems={refetchItems}
        />
      </Modal>
    </div>
  );
};

export default ClosetItem;
