import React, { useState } from 'react';
import styled from 'styled-components';

function SignupPage({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { username, email, password };
    onSignUp(userInfo); // Call onSignUp from App.js
  };

  return (
    <SignupPageStyled>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </SignupPageStyled>
  );
}

const SignupPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  animation: backgroundAnimation 5s ease-in-out infinite;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 450px;
    animation: fadeIn 1s ease-out;

    h2 {
      font-size: 2.2rem;
      color: #ff6f61;
      margin-bottom: 1.5rem;
      text-align: center;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      animation: slideIn 1s ease-out;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    }

    input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1.2rem;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 1rem;
      outline: none;
      background-color: #f9f9f9;
      transition: all 0.3s ease;
      animation: inputFocus 0.5s ease-out;

      &:focus {
        border-color: #ff6f61;
        box-shadow: 0 0 8px rgba(255, 111, 97, 0.4);
      }

      &::placeholder {
        color: rgba(34, 34, 96, 0.6);
      }
    }

    button {
      padding: 1rem 2rem;
      background: #ff6f61;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.3s ease;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

      &:hover {
        background: #feb47b;
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  @keyframes backgroundAnimation {
    0% {
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
    }
    50% {
      background: linear-gradient(135deg, #feb47b, #ff7e5f);
    }
    100% {
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes inputFocus {
    0% {
      transform: scale(1);
      border-color: #ddd;
    }
    100% {
      transform: scale(1.05);
      border-color: #ff6f61;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .form-container {
      padding: 2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    input, button {
      font-size: 1rem;
    }
  }
`;

export default SignupPage;
