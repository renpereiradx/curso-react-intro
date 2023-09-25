import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(() => {
    return JSON.parse(localStorage.getItem(itemName)) || initialValue;
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };