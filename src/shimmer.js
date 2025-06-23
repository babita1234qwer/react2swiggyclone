export default function Shimmer() {
  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-[280px] mb-2">
          <div className="w-full h-44 bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="w-[95%] mx-auto mt-3">
            <div className="font-bold text-xl bg-gray-300 animate-pulse h-7 rounded-lg"></div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
              <div className="text-lg bg-gray-300 animate-pulse h-7 rounded-lg w-16"></div>
              <div className="text-lg font-semibold bg-gray-300 animate-pulse h-7 rounded-lg w-16"></div>
            </div>
            <div className="text-gray-600 text-xl mt-1 h-7 bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}