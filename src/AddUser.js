import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), { name, age: parseInt(age) });
      alert("User added successfully!");
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
