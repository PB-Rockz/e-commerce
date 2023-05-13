function loading({}) {
  return (
    <div className="relative">
      <div className="absolute w-full h-20 md:h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <img loading="lazy" src="https://i.imgur.com/zojJOle.png" alt="" />
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 h-52 w-52 ">
          <div className="flex items-center">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
