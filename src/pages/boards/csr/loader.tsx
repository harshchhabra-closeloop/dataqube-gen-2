import classNames from 'classnames';

export default function LoadingSliding({ value }: { value: number }) {
  return (
    <div
      key={value}
      className={classNames(
        'bg-white animate-pulse border border-grey-100 shadow rounded-md p-3',
        {
          'row-span-3 ': value === 1,
        },
      )}
    >
      <div className="h-4 bg-slate-200 rounded w-2/4 mb-2" />
      <div className="h-4 bg-slate-200 rounded w-1/4 mb-3 " />
      <div className="h-9 bg-slate-200 rounded-md w-full mb-4" />
      <div
        className={classNames('flex', {
          'flex-row grid gap-4 grid-cols-2': value !== 1,
          'flex-col': value === 1,
        })}
      >
        <div
          className={classNames('bg-slate-200 rounded-xl w-full', {
            'h-96 mb-3': value === 1,
            'h-40': value !== 1,
          })}
        />
        <div className="flex flex-col">
          <div className="h-6 bg-slate-200 rounded-md w-full mb-3" />
          <div className="h-6 bg-slate-200 rounded-md w-full mb-3" />
          <div className="h-6 bg-slate-200 rounded-md w-full mb-3" />
          <div className="h-6 bg-slate-200 rounded-md w-full mb-3" />
          <div className="h-6 bg-slate-200 rounded-md w-full mb-3" />
        </div>
      </div>
    </div>
  );
}
