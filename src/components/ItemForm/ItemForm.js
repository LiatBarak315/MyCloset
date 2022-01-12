import React, { useEffect, useState } from 'react';
import './ItemsForm.css';
export const ItemForm = ({
  details = undefined,
  editMode,
  onDataChange = undefined,
}) => {
  const [data, setData] = useState(
    details || { name: '', type: '', brand: [], img: '' }
  );

  useEffect(() => {
    if (onDataChange) onDataChange(data);
  }, [data, onDataChange]);

  return (
    <div className="items-form">
      <label>
        Name:
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          disabled={!editMode}
        />
      </label>

      <label>
        Type:
        <input
          value={data.type}
          onChange={(e) => setData({ ...data, type: e.target.value })}
          disabled={!editMode}
        />
      </label>

      <label>
        Brands:
        <input
          value={data.brand.join(', ')}
          onChange={(e) =>
            setData({ ...data, brand: e.target.value.split(', ') })
          }
          disabled={!editMode}
        />
      </label>

      <label>
        Image Source:
        <input
          value={data.img}
          onChange={(e) => setData({ ...data, img: e.target.value })}
          disabled={!editMode}
        />
      </label>
    </div>
  );
};
