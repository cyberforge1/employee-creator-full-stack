// EmployeeForm.tsx

import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import PersonalInformation from '../components/PersonalInformation';
import ContactDetails from '../components/ContactDetails';
import EmployeeStatus from '../components/EmployeeStatus';

const EmployeeForm: React.FC = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  const onSubmit = async (data: any) => {
    try {
      if (id) {
        await axios.put(`http://localhost:8080/employees/${id}`, data);
      } else {
        await axios.post('http://localhost:8080/employees', data);
      }
      navigate('/employees');
    } catch (error) {
      console.error('Failed to save employee', error);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/employees/${id}`);
          reset(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch employee', error);
        }
      };

      fetchEmployee();
    } else {
      setLoading(false);
    }
  }, [id, reset]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full bg-off-white full-height">
      <Header title="Employee Form" />
      <div className="bg-white p-8 shadow-md rounded-md container">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInformation />
            <ContactDetails />
            <EmployeeStatus />

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 w-full mr-2"
                onClick={() => navigate('/employees')}
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
