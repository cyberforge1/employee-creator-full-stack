// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import App from './App';
import Employees from './pages/Employees';
import EmployeeForm from './pages/EmployeeForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
