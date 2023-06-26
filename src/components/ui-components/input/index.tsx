import { useState } from 'react';

interface Props {
  type?: string;
  label?: string;
}

export default function Input({ type = 'text', label, ...props }: Props) {
  return (
    <div className="flex flex-col font-montserrat">
      <label className="pb-2 uppercase font-semibold">{label}</label>
      <input
        type={type}
        className="w-full flex justify-between  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-left"
        {...props}
      />
    </div>
  );
}
