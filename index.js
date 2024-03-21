// GET Method
const getUsers = async () => {
  const query = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await query.json();
  return users;
};

const users = getUsers();

//POST Method
const createUser = async (contenido) => {
  const package = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contenido),
  };
  await fetch("https://jsonplaceholder.typicode.com/users", package);
};
const usuario = {
  name: "Leanne Graham",
  username: "Bret",
  email: "",
  id: 1,
};

createUser(usuario);

//-----------------------------------------------------
//PUT Method
const updateUser = async (contenido) => {
  const contenido = {};
  const package = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contenido),
  };
  await fetch(
    `https://jsonplaceholder.typicode.com/users/${contenido.id}`,
    package
  );
};

updateUser(usuario);

//-----------------------------------------------------
//DELETE Method
const deleteUser = async (id) => {
  const package = {
    method: "DELETE",
  };
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, package);
};

deleteUser(1);

//-----------------------------------------------------
//GET Method with query parameters
//https://jsonplaceholder.typicode.com/users/lastname?lastname=Graham
