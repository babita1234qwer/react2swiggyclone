export default function RestinfoShimmerList({ count = 5 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <div className="flex w-full justify-between mb-2 pb-2 animate-pulse">
            <div className="w-[70%]">
              <div className="h-8 bg-gray-300 rounded mb-2 w-2/3"></div>
              <div className="h-6 bg-gray-300 rounded mb-2 w-1/4"></div>
              <div className="flex gap-2 mb-2">
                <div className="h-5 w-12 bg-gray-300 rounded"></div>
                <div className="h-5 w-16 bg-gray-300 rounded"></div>
              </div>
              <div className="h-5 bg-gray-300 rounded mb-2 w-3/4"></div>
            </div>
            <div className="w-[20%] relative h-42 flex flex-col items-center">
              <div className="w-60 h-36 bg-gray-300 rounded-3xl mb-3"></div>
              <div className="absolute bottom-1 left-20 w-24 h-10 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
          <hr className="mb-6 mt-2" />
        </div>
      ))}
    </>
  );
}