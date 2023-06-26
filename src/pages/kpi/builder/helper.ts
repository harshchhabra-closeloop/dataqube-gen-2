export const DATA_TYPE = [
  {
    label: 'Number',
    value: 'number',
  },
  {
    label: 'Decimal',
    value: 'decimal',
  },
  {
    label: 'Percentage',
    value: 'percentage',
  },
  {
    label: 'Currency',
    value: 'currency',
  },
  {
    label: 'Text',
    value: 'text',
  },
  {
    label: 'Date',
    value: 'date',
  },
];

export const BUSINESS_OBJECTS = [
  {
    label: 'Jobs',
    value: 'jobs',
    fields: [
      {
        label: 'Job ID',
        value: 'job_id',
      },
      {
        label: 'Job Name',
        value: 'job_name',
      },
      {
        label: 'Job Category',
        value: 'job_category',
      },
    ],
  },
  {
    label: 'Calls',
    value: 'calls',
    fields: [
      {
        label: 'Calls ID',
        value: 'calls_id',
      },
      {
        label: 'Calls Name',
        value: 'calls_name',
      },
      {
        label: 'Calls Category',
        value: 'calls_category',
      },
    ],
  },
  {
    label: 'Sales',
    value: 'sales',
    fields: [
      {
        label: 'Sales ID',
        value: 'calls_id',
      },
      {
        label: 'Sales Name',
        value: 'sales_name',
      },
      {
        label: 'Sales Category',
        value: 'sales_category',
      },
    ],
  },
  {
    label: 'Business',
    value: 'business',
    fields: [
      {
        label: 'Business ID',
        value: 'business_id',
      },
      {
        label: 'Business Name',
        value: 'business_name',
      },
      {
        label: 'Business Category',
        value: 'business_category',
      },
    ],
  },
  {
    label: 'Units',
    value: 'units',
    fields: [
      {
        label: 'Unit ID',
        value: 'calls_id',
      },
      {
        label: 'Unit Name',
        value: 'calls_name',
      },
      {
        label: 'Unit Category',
        value: 'unit_category',
      },
    ],
  },
  {
    label: 'Users',
    value: 'users',
    fields: [
      {
        label: 'User ID',
        value: 'user_id',
      },
      {
        label: 'User Name',
        value: 'user_name',
      },
      {
        label: 'User Category',
        value: 'user_category',
      },
    ],
  },
];

export const DATA_SOURCE = [
  {
    label: 'Service Titan',
    value: 'service_titan',
    business_objects: BUSINESS_OBJECTS.filter((v) => v.value !== 'users'),
  },
  {
    label: 'Google Ads',
    value: 'google_ads',
    business_objects: BUSINESS_OBJECTS.filter((v) => v.value !== 'business'),
  },
  {
    label: 'Facebook Ads',
    value: 'facebook_ads',
    business_objects: BUSINESS_OBJECTS.filter((v) => v.value === 'sales'),
  },
  {
    label: 'DialPad',
    value: 'dialpad',
    business_objects: BUSINESS_OBJECTS.filter((v) => v.value !== 'calls'),
  },
];
