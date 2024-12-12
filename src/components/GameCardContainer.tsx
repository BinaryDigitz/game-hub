interface Props {
  children: React.ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <div className=" bg-[#00000e] p-4 md:w-[300px] md:h-[300px] rounded-lg m-3 shadow-md overflow-hidden">
      {children}
    </div>
  );
}

export default GameCardContainer;
