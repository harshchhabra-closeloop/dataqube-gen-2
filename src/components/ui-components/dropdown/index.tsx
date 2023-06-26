import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

interface ValueObjProps {
  label: string;
  value: string | number;
}

interface Props {
  items: any[];
  value?: ValueObjProps;
  label?: string;
  onChange?: (value: any) => void;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
}

export default function Dropdown({
  items = [],
  value: defaultValue = { label: '', value: '' },
  label = '',
  onChange,
  disabled = false,
  placeholder = '',
}: Props) {
  return (
    <Listbox
      value={defaultValue}
      onChange={onChange}
      as="div"
      className={'flex flex-col font-montserrat'}
    >
      {!!label && (
        <Listbox.Label className="pb-2 uppercase  font-semibold">{label}</Listbox.Label>
      )}
      <div className="relative">
        <Listbox.Button
          className={`w-full flex justify-between  gap-x-1.5 rounded-md  px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  text-left ${
            disabled ? ' bg-gray-200 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'
          }`}
        >
          {defaultValue.label || placeholder || 'Select Value'}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Listbox.Button>
        {!!items?.length && !disabled && (
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options className="mt-2 z-10 absolute w-full bg-gray-50 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map(({ value, label }) => (
                <Listbox.Option key={value} value={{ value, label }} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`block px-4  py-2 text-sm cursor-pointer ${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-black hover:bg-slate-300'
                      }`}
                    >
                      {selected && <CheckIcon />}
                      {label}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        )}
      </div>
    </Listbox>
  );
}
