import React, { useState } from 'react';

const App = () => {
  const initialData = [
    { id: 1, name: 'Harry Potter e a Pedra Filosofal', favorite: false },
    { id: 2, name: 'O Hobbit', favorite: false },
    { id: 3, name: 'A menina que roubava livros', favorite: false },
    { id: 4, name: 'Kimetsu No Yaiba - Volume 1', favorite: false },
    { id: 5, name: 'Eu, Robô', favorite: false },
    { id: 6, name: 'A arte da Guerra', favorite: false },
    { id: 7, name: 'As Crônicas de Nárnia', favorite: false },
    { id: 8, name: 'Eragon', favorite: false },
    { id: 9, name: 'Uma breve história do tempo', favorite: false },
    { id: 10, name: 'Sapiens', favorite: false },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  const handleFavorite = (itemId) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
    setData(updatedData);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Digite para pesquisar"
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
            <button onClick={() => handleFavorite(item.id)}>
              {item.favorite ? 'Remover Favorito' : 'Favoritar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
