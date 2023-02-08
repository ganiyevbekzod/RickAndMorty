import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import {  RouterProvider } from 'react-router-dom';
import { router } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
 <RouterProvider  router={router}/>
 </React.StrictMode>
);

