import viteLogo from "/vite.svg";
import books from "./data/books.json";
import react, { useState } from "react";

function App() {
  // obtenemos los géneros de los libros
  const genres = [...new Set(books.library.map((book) => book.book.genre))]; // el Set es para que no se repitan los géneros de los libros

  // estado de lista de libros
  const [library, setLibrary] = useState(books.library);

  const handleChangeGenre = (event) => {
    const genre = event.target.value;
    if (genre === "") {
      setLibrary(books.library);
    } else {
      const filteredBooks = books.library.filter(
        (book) => book.book.genre === genre
      );
      setLibrary(filteredBooks);
    }
  };
  return (
    <>
      <nav className="navbar items-center flex gap-4 py-4 px-7 dark:bg-gray-800">
        <img src={viteLogo} alt="Vite Logo" />
        <h2 className="font-semibold">Libros On line</h2>
      </nav>

      <div className="grid main h-[100vh] lg:grid-cols-6 dark:bg-slate-900 pt-6">
        <div className="col-span-4 px-4">
          <h2 className="font-semibold text-lg pb-2">Libros</h2>
          <div className="flex gap-4 mb-7">
            <input
              type="text"
              placeholder="Buscar libro"
              className=" dark:bg-gray-700 p-2 rounded-xl"
            />
            <select
              onChange={handleChangeGenre}
              className="dark:bg-gray-600 rounded-xl"
              name="gender"
              id=""
            >
              <option value="">Todos los géneros</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <ul className="grid grid-cols-4 gap-6 ">
            <Card libros={library} />
          </ul>
        </div>

        <div className=" col-span-2">
          <h2 className="font-semibold text-lg pb-2">Lista de lectura</h2>
          <p>Tu lista de lecturas pendientes</p>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";

export const Card = ({ libros }) => {
  return libros.map((libro, index) => (
    <div key={index} className=" bg-slate-700 rounded-xl">
      <img className="w-[100%] h-[70%] " src={libro.book.cover} alt="" />
      <div className="p-2">
        <h3 className="font-semibold">{libro.book.title}</h3>
        <p className="text-xs dark:text-white/70">{libro.book.author.name}</p>
        <p></p>
      </div>
    </div>
  ));
};
