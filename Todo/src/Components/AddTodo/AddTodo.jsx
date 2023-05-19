import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length === 0) {
            //trim으로 앞뒤로 여백을 줄인 조건
            return;
        }
        onAdd({ id: uuidv4(), text, status: 'active' });
        setText(''); // 추가 하고나서 값을 비운
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Todo"
                value={text}
                onChange={handleChange}
                className="form-field"
            ></input>
            <button className="submit-btn">Add</button>
        </form>
    );
}
