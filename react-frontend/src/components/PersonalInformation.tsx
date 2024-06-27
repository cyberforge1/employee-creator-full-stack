// PersonalInformation.tsx

import React from 'react';
import { useFormContext } from 'react-hook-form';

const PersonalInformation: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Personal information</h2>

      <div className="mb-4">
        <label className="block font-bold mb-2">First name</label>
        <input
          type="text"
          {...register('firstName', { required: true })}
          className="border p-2 w-full"
        />
        {errors.firstName && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Middle name (if applicable)</label>
        <input
          type="text"
          {...register('middleName')}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Last name</label>
        <input
          type="text"
          {...register('lastName', { required: true })}
          className="border p-2 w-full"
        />
        {errors.lastName && <span className="text-red-500">This field is required</span>}
      </div>
    </div>
  );
};

export default PersonalInformation;
