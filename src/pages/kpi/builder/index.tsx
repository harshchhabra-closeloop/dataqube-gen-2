import { Button, Dropdown } from '@ui-components';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormulaBuilder from 'src/components/ui-components/formula-builder';
import Input from 'src/components/ui-components/input';

import { DATA_SOURCE, DATA_TYPE } from './helper';

function KPIBuilder() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    resetField,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'data_source') {
        resetField('business_object');
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const watchDataType = watch('data_type', '');
  const isDecimalPrecisionVisible =
    watchDataType.value === 'currency' ||
    watchDataType.value === 'decimal' ||
    watchDataType.value === 'percentage';

  const watchDataSource = watch('data_source', '');
  const selectedBusinessObjects =
    DATA_SOURCE.find((v) => v.value === watchDataSource.value)?.business_objects || [];
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-gray-50 text-center dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-4xl font-extrabold mb-2">
            KPI Calculation
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Calculate your KPI&apos;s
          </p>
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10">
            <Input label="Name" {...register('name')} />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Dropdown
                  value={value}
                  label="Data Type"
                  items={DATA_TYPE}
                  onChange={onChange}
                />
              )}
              name="data_type"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Dropdown
                  value={value}
                  label="Data Source"
                  items={DATA_SOURCE}
                  onChange={onChange}
                />
              )}
              name="data_source"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Dropdown
                  value={value}
                  label="Business Object"
                  items={selectedBusinessObjects}
                  disabled={!selectedBusinessObjects?.length}
                  onChange={onChange}
                />
              )}
              name="business_object"
            />
            {isDecimalPrecisionVisible && (
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Dropdown
                    value={value}
                    label="Decimal Precision"
                    items={[
                      { label: '1', value: 1 },
                      { label: '2', value: 2 },
                    ]}
                    onChange={onChange}
                  />
                )}
                name="decimal_precision"
              />
            )}
          </div>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormulaBuilder
                value={value}
                label="Calculation Builder"
                onChange={onChange}
              />
            )}
            name="formula"
          />
          <Button text="Submit" />
        </form>
      </section>
    </div>
  );
}

export default KPIBuilder;
