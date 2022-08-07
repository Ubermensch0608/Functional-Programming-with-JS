import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Second from './components/Second';
import Todos from './components/TodoList/Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
