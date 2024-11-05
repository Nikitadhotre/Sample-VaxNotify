// SignupPage.jsx
import React, { useState } from "react";
import "./SignupPage.css";

const SignupPage = () => {
  const [isActive, setIsActive] = useState(false);

  // State to manage input values
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    guardianName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  // State to manage error messages
  const [errors, setErrors] = useState({});

  const toggleContainer = () => {
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });

    // Automatically calculate age based on date of birth
    if (name === "dob") {
      calculateAge(value);
    }
  };

  const calculateAge = (dob) => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }

      setFormData((prevData) => ({
        ...prevData,
        age: `${years} years ${months} months`, // Format age as "X years Y months"
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        age: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation rules
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.guardianName)
      newErrors.guardianName = "Guardian/Parent Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required.";
    if (!/^\d+$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone Number must be numeric.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("Registration successful!");
          setFormData({
            name: "",
            dob: "",
            age: "",
            guardianName: "",
            email: "",
            phoneNumber: "",
            password: "",
          });
        } else {
          alert("Registration failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error connecting to the server.");
      }
    }
  };
  

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            readOnly // Age is automatically calculated, so make this field read-only
            required
          />
          {errors.age && <span className="error">{errors.age}</span>}
          <input
            type="text"
            name="guardianName"
            placeholder="Guardian/Parent Name"
            value={formData.guardianName}
            onChange={handleChange}
            required
          />
          {errors.guardianName && (
            <span className="error">{errors.guardianName}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
        <img src="src/assets/vaccination.png" alt="" width="260px"/>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            {/* <h1>Welcome Back!</h1> */}
            <img src="src/assets/vaccination.png" alt="" width="290px"/>
            <p>Already Registred on VaxNotify ?</p>
            <button className="hidden" id="login" onClick={toggleContainer}>
              Log In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>VaxNotify!</h1>
            <p>
            Your Partner in Vaccination – Timely Reminders for Every Shot!
            </p>
            <button className="hidden" id="register" onClick={toggleContainer}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
