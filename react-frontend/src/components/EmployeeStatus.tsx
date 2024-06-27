// src/components/EmployeeStatus.tsx

import React from 'react';
import { useFormContext } from 'react-hook-form';

const EmployeeStatus: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Employee status</h2>

      <div className="mb-4">
        <label className="block font-bold mb-2">What is contract type?</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            value="Permanent"
            {...register('contractType', { required: true })}
            className="mr-2"
          />
          <label>Permanent</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Contract"
            {...register('contractType', { required: true })}
            className="mr-2"
          />
          <label>Contract</label>
        </div>
        {errors.contractType && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Start date</label>
        <input
          type="date"
          {...register('startDate', { required: true })}
          className="border p-2 w-full bg-white"
        />
        {errors.startDate && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Finish date</label>
        <input
          type="date"
          {...register('finishDate')}
          className="border p-2 w-full bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Ongoing</label>
        <input
          type="checkbox"
          {...register('ongoing')}
          className="mr-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Employment type</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            value="FULL_TIME"
            {...register('employmentType', { required: true })}
            className="mr-2"
          />
          <label>Full-time</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="PART_TIME"
            {...register('employmentType', { required: true })}
            className="mr-2"
          />
          <label>Part-time</label>
        </div>
        {errors.employmentType && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Hours per week</label>
        <input
          type="number"
          {...register('hoursPerWeek', { required: true })}
          className="border p-2 w-full"
        />
        {errors.hoursPerWeek && <span className="text-red-500">This field is required</span>}
      </div>
    </div>
  );
};

export default EmployeeStatus;
