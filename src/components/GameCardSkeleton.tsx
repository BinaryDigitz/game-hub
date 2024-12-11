

function GameCardSkeleton() {
  return (
    <div className=" shadow-lg border bg-blue-[#152238] p-4 md:w-[300px] md:h-[300px] rounded-lg m-3 shadow-md overflow-hidden">
      <img src="" className="min-h-100 min-w-200 bg-white" alt="" />
      <div className="p-2">
        <h2 className="h-4 bg-blue-800"></h2>
        <h4 className="flex gap-4 justitfy-between items-center bg-blue-950">
            <h3 className="min-h-4"></h3>
            <h3 className="min-h-4"></h3>
        </h4>
      </div>
    </div>
  )
}

export default GameCardSkeleton
