import React from 'react';
import ClosetItem from '../ClosetItem/ClosetItem';
import './Closet.css';
import useCloset from './Closet.hooks';

const Closet = () => {
  const [items, isLoading, deleteItem, refetchItems] = useCloset();

  return (
    <div className="closet">
      {isLoading ? <h1>Loading...</h1> : <h1>My Closet</h1>}
      <div className="items-container">
        {items &&
          items.map((item) => (
            <ClosetItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              refetchItems={refetchItems}
            />
          ))}
      </div>
    </div>
  );
};

export default Closet;
