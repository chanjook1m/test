import React, { useState, useRef } from 'react';

export default function UncontrolledForm() {
  const inputRef = useRef();


  const handleChange = (e) => {
    return e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        ref={inputRef}
      >
      </input>

      <input type="submit" value="제출"></input>
    </form>
  );
}