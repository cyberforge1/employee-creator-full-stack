// src/components/ContactDetails.tsx

import React from 'react';
import { useFormContext } from 'react-hook-form';

const ContactDetails: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Contact details</h2>

      <div className="mb-4">
        <label className="block font-bold mb-2">Email address</label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="border p-2 w-full"
        />
        {errors.email && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Mobile number</label>
        <input
          type="text"
          {...register('phoneNumber', { required: true })}
          className="border p-2 w-full"
        />
        {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Residential address</label>
        <input
          type="text"
          {...register('residentialAddress', { required: true })}
          className="border p-2 w-full"
        />
        {errors.residentialAddress && <span className="text-red-500">This field is required</span>}
      </div>
    </div>
  );
};

export default ContactDetails;
