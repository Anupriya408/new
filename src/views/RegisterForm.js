import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const user = { name, mobile, password };
      onRegister(user);
      setName('');
      setMobile('');
      setPassword('');
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = 'fill the details';
    }

    // Validate mobile
    // if (!mobile.trim()) {
    //   errors.mobile = 'Mobile is required';
    // } else if (!/^\d{10}$/.test(mobile.trim())) {
    //   errors.mobile = 'Invalid mobile number';
    // }

    // Validate password
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.trim().length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    return errors;
  };

  return (
    <div>
      <h2  style={{color:"teal"}}>Registeration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:--</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="mobile">Mobile:--</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:--</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" style={{color:"black",width:"8%"}}>REGISTER</button>
      </form>
    </div>
  );
};

export default RegisterForm;
