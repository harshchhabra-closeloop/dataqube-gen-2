import { useState } from 'react';
import Dropdown from '../dropdown';
import { FUNCTIONS, LOGICAL_OPERATORS, OPERATORS } from './helpers';
import Fields from './components/fields';
import Operators from './components/operators';

interface Props {
  label?: string;
  value?: any;
  fields?: any[];
}

export default function FormulaBuilder({ label = '', value = '', fields = [] }: Props) {
  const [state, setState] = useState<any[]>([]);

  const renderContent = (obj, key) => {
    switch (obj.type) {
      case 'field':
        return <Fields onChange={setState} key={key} {...obj} />;
      case 'operator':
        return <Operators {...obj} />;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col font-montserrat mb-10">
      <label className="pb-2 uppercase font-semibold">{label}</label>
      <div className="grid grid-cols-2 gap-5 items-center mb-5">
        <div className="grid grid-cols-7 gap-2 items-center">
          {OPERATORS.map((v, index) => (
            <button
              key={index}
              className="px-1 py-2 text-lg font-semibold bg-gray-200 text-center inset-10 shadow-md"
              onClick={() => setState((prevState) => [...prevState, { label: v, value: v, type: 'operator' }])}
            >
              {v}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Dropdown
            items={fields}
            placeholder="Fields"
            disabled={!fields?.length}
            onChange={(v) =>
              setState((prevState) => [...prevState, { ...v, type: 'field' }])
            }
          />
          <Dropdown
            items={LOGICAL_OPERATORS}
            placeholder="Logical"
            onChange={(v) =>
              setState((prevState) => [...prevState, { ...v, type: 'logical' }])
            }
          />
          <Dropdown
            items={FUNCTIONS}
            placeholder="Functions"
            onChange={(v) =>
              setState((prevState) => [...prevState, { ...v, type: 'function' }])
            }
          />
        </div>
      </div>
      <div className=" h-52 bg-gray-100 w-full p-3">
        {state.map((v: any, index) => renderContent(v, index))}
        <input className='bg-gray-100' />
      </div>
    </div>
  );
}
