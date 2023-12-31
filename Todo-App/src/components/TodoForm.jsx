import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // Added an empty dependency array to run the effect only once on mount

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      // Don't submit if the input is empty or contains only whitespace
      return;
    }

    onSubmit({
      id: Math.floor(Math.random() * 200),
      text: input.trim(),
    });

    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        required={true} // or simply required
      />
      <button className='todo-button'>Add todo</button>
    </form>
  );
}

export default TodoForm;

