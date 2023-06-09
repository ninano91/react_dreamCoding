import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Korean from './pages/Korean';
import Root from './pages/Root';
import Contact from './pages/Contact';
import About from './pages/About';
import Story from './pages/Story';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/portfolio',
                element: <Korean />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/story',
                element: <Story />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
