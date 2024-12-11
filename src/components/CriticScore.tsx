interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color =
    score >= 75
      ? "text-green-500"
      : score >= 50
      ? "text-yellow-500"
      : "text-red-500";
  return (
    <div
      className={`bg-blue-950  size-9 md:size-8 grid place-items-center rounded-md shadow-md ${color}`}
    >
      {score}
    </div>
  );
}

export default CriticScore;
