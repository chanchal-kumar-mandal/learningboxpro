import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Updated import
import { auth, db } from "./firebase"; // Firestore instance and Auth

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    address: "",
    country: "",
    pincode: "",
    age: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Validation helper function
  const isValid = () => {
    const { firstName, lastName, phone, email, password, age } = formData;

    if (!firstName.trim()) return "First Name is required.";
    if (!lastName.trim()) return "Last Name is required.";
    if (!phone.match(/^\d{10}$/)) return "Phone number must be 10 digits.";
    if (!email.match(/^\S+@\S+\.\S+$/)) return "Invalid email format.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    if (!age || isNaN(age) || age < 18) return "Age must be a number and at least 18.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const validationError = isValid();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const { email, password, ...userDetails } = formData;

      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Step 2: Save user details in Firestore with UID as document ID
      const userId = userCredential.user.uid;
      const userRef = doc(db, "users", userId); // Use UID as the document ID
      await setDoc(userRef, {
        uid: userId,
        email,
        ...userDetails,
        createdAt: new Date().toISOString(),
      });

      setSuccessMessage("User signed up successfully!");
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        address: "",
        country: "",
        pincode: "",
        age: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error("Error during signup:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form onSubmit={handleSignUp} className="border p-4 shadow-sm rounded">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="form-control"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-control"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="form-control"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-control"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
