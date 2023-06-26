interface Props {
  label: string;
  value: string;
}

export default function Operators({ value }: Props) {
  return (
    <input
      className="inline-block relative justify-between mr-3 mb-3 bg-slate-100 h-10 w-10 p-2 font-montserrat text-center"
      value={value}
    />
  );
}
