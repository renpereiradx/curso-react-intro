import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
   setTimeout(() => {
     try {
       const localStorageItem = localStorage.getItem(itemName);
       let parsedItem;
       if (!localStorageItem) {
         localStorage.setItem(itemName, JSON.stringify(initialValue));
         parsedItem = initialValue;
       } else {
         parsedItem = JSON.parse(localStorageItem);
         setItem(parsedItem);
       }
       setLoading(false);
     } catch (error) {
       setError(error);
     }
   }, 3000);
  }, []);

  //const [item, setItem] = React.useState(() => {
  //return JSON.parse(localStorage.getItem(itemName)) || initialValue;
  //});

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Jugar Apex', completed: false },
  { text: 'Usar estados derivados', completed: true },
  { text: 'Prueba', completed: true },
]; */