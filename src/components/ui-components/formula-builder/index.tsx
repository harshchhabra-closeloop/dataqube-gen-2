import Dropdown from '../dropdown';
import { FUNCTIONS, LOGICAL_OPERATORS, OPERATORS } from './helpers';

interface Props {
  label?: string;
  value?: any;
  fields?: [];
}

export default function FormulaBuilder({ label = '', value = '', fields = [] }: Props) {
  return (
    <div className="flex flex-col font-montserrat mb-10">
      <label className="pb-2 uppercase font-semibold">{label}</label>
      <div className="grid grid-cols-2 gap-5 items-center mb-5">
        <div className="grid grid-cols-7 gap-2 items-center">
          {OPERATORS.map((v, index) => (
            <button
              key={index}
              className="px-1 py-2 text-lg font-semibold bg-gray-200 text-center inset-10 shadow-md"
            >
              {v}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Dropdown items={fields} placeholder="Fields" />
          <Dropdown items={LOGICAL_OPERATORS} placeholder="Logical" />
          <Dropdown items={FUNCTIONS} placeholder="Functions" />
        </div>
      </div>
      <div className=" h-52 bg-gray-100 w-full"></div>
    </div>
  );
}
