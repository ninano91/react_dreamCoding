import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Korean from './pages/Korean';
import Root from './pages/Root';
import English from './pages/English';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Korean />,
            },
            {
                path: '/korean',
                element: <Korean />,
            },
            {
                path: '/english',
                element: <English />,
            },
            // { path: 'videos/:keyword', element: <Videos /> },
            // { path: 'videos/watch/:videoId', element: <VideoDetail /> },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
