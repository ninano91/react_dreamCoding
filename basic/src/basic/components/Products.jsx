import React, { useEffect, useState } from 'react';

export default function Products() {
    // const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터를 네트워크에 주워옴🤖');

                setProducts(data);
            });
        return () => {
            console.log('지워.🧹');
        };
    }, [checked]);

    return (
        <>
            <input
                className="sale-input"
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={handleChange}
            />
            <label className="sale-title" htmlFor="checkbox">
                Show Only Hot Sale
            </label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            {/* <button onClick={() => setCount((prev) => prev + 1)}>
                {count}
            </button> */}
        </>
    );
}
