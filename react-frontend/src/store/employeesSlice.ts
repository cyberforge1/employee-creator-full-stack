// src/store/employeesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/employees';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  jobTitle: string;
  hireDate: string;
  salary: number;
  status: string;
  residentialAddress: string;
  startDate: string;
  finishDate: string;
  ongoing: boolean;
  employmentType: string;
  hoursPerWeek: number;
  contractType: string; // Add contractType here if not already
}

interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk<Employee[]>('employees/fetchEmployees', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addEmployee = createAsyncThunk<Employee, Employee>('employees/addEmployee', async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
});

export const updateEmployee = createAsyncThunk<Employee, { id: number, employee: Employee }>('employees/updateEmployee', async ({ id, employee }) => {
  const response = await axios.put(`${API_URL}/${id}`, employee);
  return response.data;
});

export const deleteEmployee = createAsyncThunk<number, number>('employees/deleteEmployee', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch employees';
      })
      .addCase(addEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
        state.employees[index] = action.payload;
      })
      .addCase(deleteEmployee.fulfilled, (state, action: PayloadAction<number>) => {
        state.employees = state.employees.filter((emp) => emp.id !== action.payload);
      });
  },
});

export default employeesSlice.reducer;
