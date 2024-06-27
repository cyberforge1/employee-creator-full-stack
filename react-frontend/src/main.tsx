// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import Employees from './pages/Employees';
import EmployeeForm from './pages/EmployeeForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/employee-form/:id" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
