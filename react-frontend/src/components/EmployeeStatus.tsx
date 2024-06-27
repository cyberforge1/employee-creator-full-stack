// EmployeeStatus.tsx

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
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Day"
            {...register('startDay', { required: true })}
            className="border p-2"
          />
          <select {...register('startMonth', { required: true })} className="border p-2">
            <option value="">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <input
            type="text"
            placeholder="Year"
            {...register('startYear', { required: true })}
            className="border p-2"
          />
        </div>
        {errors.startDay && <span className="text-red-500">This field is required</span>}
        {errors.startMonth && <span className="text-red-500">This field is required</span>}
        {errors.startYear && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Finish date</label>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Day"
            {...register('finishDay')}
            className="border p-2"
          />
          <select {...register('finishMonth')} className="border p-2">
            <option value="">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <input
            type="text"
            placeholder="Year"
            {...register('finishYear')}
            className="border p-2"
          />
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            {...register('ongoing')}
            className="mr-2"
          />
          <label>Ongoing</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Is this on a full-time or part-time basis?</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            value="Full-time"
            {...register('employmentType', { required: true })}
            className="mr-2"
          />
          <label>Full-time</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="Part-time"
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
          type="text"
          {...register('hoursPerWeek', { required: true })}
          className="border p-2 w-full"
        />
        {errors.hoursPerWeek && <span className="text-red-500">This field is required</span>}
      </div>
    </div>
  );
};

export default EmployeeStatus;
