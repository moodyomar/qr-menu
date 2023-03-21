import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import App from './App';
import { LanguageProvider } from './contexts/LanguageSwitcher';
import { WhatsappProvider } from './contexts/WhatsappCart';

const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <LanguageProvider>
    <WhatsappProvider>
      <App/>
    </WhatsappProvider>
    </LanguageProvider>
    ,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

