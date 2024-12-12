interface Props {
  children: React.ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <div className="md:w-[300px] md:h-[330px] rounded-lg m-3 shadow-lg overflow-hidden">
      {children}
    </div>
  );
}

export default GameCardContainer;
