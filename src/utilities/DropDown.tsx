type DropDownType = {
  name?: string;
  firstName?: string
  icon?: string | null;
  id: number;
};
interface Props {
  details: DropDownType[];
  onClick: (id: number) => void;
}
function DropDown({ details, onClick }: Props) {
  return (
    <div className=" inline-block  shadow-md">
      {details.map((detail) => (
        <button
          key={detail.id}
          className="flex gap-4 justify-between min-h-7 min-w-[100px] w-full py-1 px-3 hover:bg-blue-200  trans  border overflow-hidden"
          onClick={() => onClick(detail.id)}
        >
          {detail.icon && (
            <span className="min-w-[25%] text-start">{detail.icon}</span>
          )}
          <p className="text-start flex-1 min-w-[75%] text-green-900">
            {detail.name}
          </p>
        </button>
      ))}
    </div>
  );
}

export default DropDown;
