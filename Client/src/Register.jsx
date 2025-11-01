import React, { useState } from 'react';
import './Register.css'; // We'll create this CSS file next
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from "./store/slices/UserSlice";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addUser, { isLoading }] = useAddUserMutation();
 const nevigate =  useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    const BASE_URL = "http://localhost:3000/"
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Here you would typically make an API call to your backend
        // For demonstration, we'll simulate an API call with setTimeout
      //  const resopnse  = await fetch(`${BASE_URL}user`, {
      //       method: "POST",
      //       body : JSON.stringify(formData),
      //       headers: {
      //           "Content-Type": "application/json"
      //       },
      //   })
        addUser(formData)
        // console.log(await resopnse.json())
        // Call the onRegister prop with the form data
        // onRegister({
        //   name: formData.name,
        //   email: formData.email,
        //   password: formData.password
        // });
        // Reset form data
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setTimeout(() => {
            nevigate("/")
        },2000)

      } catch (error) {
        console.error('Registration error:', error);
        setErrors({ api: error.message || 'Registration failed. Please try again.' });
        // setErrors({ api: error || 'Registration failed. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      {errors.api && <div className="error-message">{errors.api}</div>}
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>
        
        <button 
          type="submit" 
          className="register-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <div className="register-footer">
        <span>Already have an account? <a href="/login">Sign in</a></span>
      </div>
    </div>
  );
};

export default Register;