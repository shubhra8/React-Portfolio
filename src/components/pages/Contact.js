import React, { useState,useEffect } from 'react';
import '../../styles/contact.css';
import { checkPassword, validateEmail } from '../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
     const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
      if (!inputValue || !validateEmail(inputValue) ) {
        setErrorMessage('Email is invalid');
      }
      else{
      setErrorMessage('');
    }
     // handleFormSubmit(inputValue);
      //alert(` ${email}`);
    } 
    else if (inputType === 'userName') {
      setUserName(inputValue);
      if (!inputValue ) {
         setErrorMessage('User is invalid');
    }  else{
      setErrorMessage('');
    }
  }
    else {
    setMessage(inputValue);
    if (!inputValue ) {
         setErrorMessage('User is invalid');
    }  else{
      setErrorMessage('');
    }
    }
  }
  

  // const handleFormSubmit = (e) => {
   
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //  // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  //   if (!validateEmail(email) ) {
  //   setErrorMessage('Email is invalid');
  //     // We want to exit out of this code block if something is wrong so that the user can correct it
  //     return;
  //     // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  //   }
  //   else{
  //     setErrorMessage('');
  //   }
  // }

  const handleFormSubmit1 = (e) => {
   
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName ) {
    setErrorMessage('User is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    else{
      setErrorMessage('');
    }
  }
     const handleFormSubmit2 = (e) => {
   
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
      if (!message ) {
    setErrorMessage('Message is required');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    else{
      setErrorMessage('');
    }
  }

  
   
    // else{
    //  setEmail('');
    // }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }
    

    //If everything goes according to plan, we want to clear out the input after a successful registration.
    // setUserName('');
    
  
  
  return (
    
    <div className='contact'>
      <h1>Contact Me</h1>
      <br></br>
       <form className="form">
     <label for="fname">Email:</label>
        <input
          value={email}
          name="email"
         onChange={handleInputChange}
      // onMouseOut={handleFormSubmit}
          type="text"
         // placeholder="email"
        />
        <br></br>
        <br></br>
         <label for="fname">User Name:</label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
           onMouseOut={handleFormSubmit1}
          type="text"
         // placeholder="userName"
        />
        <br></br>
        <br></br>
        <label for="fname">Message:</label>
        <input
           value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleFormSubmit2}
          type="text"
          placeholder="message"
        />
        <br></br>
        <br></br>
        <button type="button" >Submit</button>
        </form>
    {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );

  }