import 'react-querybuilder/dist/query-builder.css';

import { useState } from 'react';
import { Field, formatQuery, QueryBuilder, RuleGroupType } from 'react-querybuilder';

const fields: Field[] = [
  { name: 'customerNumber', label: 'Customer Number', datatype: 'text' },
  { name: 'customerName', label: 'Customer Name', datatype: 'text', inputType: 'text' },
  {
    name: 'contactLastName',
    label: 'Contact Last Name',
    datatype: 'text',
    inputType: 'text',
  },
  {
    name: 'contactFirstName',
    label: 'Contact First Name',
    datatype: 'text',
    inputType: 'text',
  },
  { name: 'phone', label: 'Phone', datatype: 'text', inputType: 'number' },
  { name: 'addressLine1', label: 'Address', datatype: 'text', inputType: 'number' },
];

function QueryBuilderComponent() {
  const [query, setQuery] = useState<RuleGroupType>({
    combinator: 'and',
    rules: [{ field: 'customerNumber', operator: '=', value: 'Stev' }],
  });
  return (
    <div className="p-4">
      <h1 className="mb-3 font-montserrat font-extrabold text-3xl">
        React Query Builder
      </h1>
      <QueryBuilder
        query={query}
        enableDragAndDrop
        onQueryChange={(q) => setQuery(q)}
        controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
        fields={fields}
      />
      <div className=" mt-10">
        <code>{formatQuery(query, 'sql')}</code>
      </div>
    </div>
  );
}

export default QueryBuilderComponent;
