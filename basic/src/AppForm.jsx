import React, { useState } from 'react';

export default function AppForm() {
    const [form, setForm] = useState({ name: '', email: '' });
    // 연관된 데이터라면 객체로 컨트롤하자!

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼에서 리프레시를 원하는게 아니라면, prventDefault 필수!
        console.log(form);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름 : </label>
            <input
                type="text"
                id="name"
                name="name"
                value={form.name || ''}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="email">이메일 : </label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email || ''}
                onChange={handleChange}
            />
            <br />
            <button>Submit</button>
        </form>
    );
}
