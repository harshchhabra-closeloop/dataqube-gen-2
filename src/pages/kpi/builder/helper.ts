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
  },
  {
    label: 'Calls',
    value: 'calls',
  },
  {
    label: 'Sales',
    value: 'sales',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Units',
    value: 'units',
  },
  {
    label: 'Users',
    value: 'users',
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
