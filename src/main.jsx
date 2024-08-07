import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import './index.css'
import Root from './pages/Root/Root'
import FormPage from './pages/FormPage/FormPage'
import AddCoffee from './pages/AddCoffee/AddCoffee'
import UpdateCoffee from './pages/UpdateCoffee/UpdateCoffee'
import SingleCoffee from './pages/SingleCoffee/SingleCoffee'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/form',
                element: <FormPage />,
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />,
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee />,
            },
            {
                path: '/singleCoffee',
                element: <SingleCoffee />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
