// src/pages/EmployeeForm.tsx
import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import Header from '../components/Header';
import PersonalInformation from '../components/PersonalInformation';
import ContactDetails from '../components/ContactDetails';
import EmployeeStatus from '../components/EmployeeStatus';
import { addEmployee, updateEmployee, fetchEmployees } from '../store/employeesSlice';
import BackButton from '../components/BackButton';

const EmployeeForm: React.FC = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { employees, loading, error } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployees());
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id && employees.length > 0) {
      const employee = employees.find((emp) => emp.id === Number(id));
      if (employee) {
        reset(employee); // Reset form fields with fetched employee data
      }
    }
  }, [id, employees, reset]);

  const onSubmit = async (data: any) => {
    if (id) {
      await dispatch(updateEmployee({ id: Number(id), employee: data }));
    } else {
      await dispatch(addEmployee(data));
    }
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full bg-off-white full-height">
      <Header title="Employee details" />
      <div className="bg-white p-8 shadow-md rounded-md container">
        <BackButton />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInformation />
            <ContactDetails />
            <EmployeeStatus />

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 w-full mr-2"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full ml-2"
              >
                Save
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default EmployeeForm;
