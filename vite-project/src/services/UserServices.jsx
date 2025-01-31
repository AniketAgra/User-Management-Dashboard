const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addUser = async (user) => {
  const res = await fetch(API_URL, { method: "POST", body: JSON.stringify(user), headers: { "Content-Type": "application/json" } });
  return res.json();
};

export const updateUser = async (user) => {
  const res = await fetch(`${API_URL}/${user.id}`, { method: "PUT", body: JSON.stringify(user), headers: { "Content-Type": "application/json" } });
  return res.json();
};

export const deleteUser = async (id) => {

  try{
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    console.log(id, " Updated successfully");
  }
  catch(error){
    console.log("Error:",error);
  }
};
