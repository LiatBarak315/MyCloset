import { useEffect, useState } from 'react';
import { getAllItems } from '../../api/api';

const useCloset = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const refetchItems = () => setCounter((prev) => prev + 1);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const items = await getAllItems();
      setItems(items);
      setIsLoading(false);
    };
    fetchData();
  }, [counter]);

  return [items, isLoading, deleteItem, refetchItems];
};

export default useCloset;
