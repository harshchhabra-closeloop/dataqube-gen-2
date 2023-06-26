import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Fields({ label = '', key }) {
    console.log(key)
  return (
    <div className="inline-block relative justify-between mr-3 mb-3 bg-slate-300 h-10 w-auto p-2 rounded font-montserrat">
      <span className='mr-8 text-sm font-extrabold'>{label}</span>
      <XMarkIcon className='absolute top-[31%] right-[3%] h-4 cursor-pointer' />
    </div>
  );
}
