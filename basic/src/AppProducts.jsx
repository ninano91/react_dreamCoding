import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
            {showProducts && <Products />}
            <button
                className="sale-toggle-btn"
                onClick={() => setShowProducts((show) => !show)}
            >
                Toggle
            </button>
        </div>
    );
}
