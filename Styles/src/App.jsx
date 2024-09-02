const App = () => {
  return (
    <>
      <div className="grid grid-rows-4 grid-cols-3 gap-1 h-screen">
        <nav
          className="bg-red-500 col-span-3 flex-shrink-5
        p-4 shadow-lg hover:shadow-red-700 transition-shadow duration-300"
        >
          this is nav bar
        </nav>
        <sidebar
          className="bg-green-500 col-span-1 row-span-3
        flex-shrink-5"
        >
          This Is Side Bar
        </sidebar>
        {/* <container
          className="bg-blue-500 col-span-2 row-span-3
         grid gap-1 grid-cols-3  grid-rows-4  justify-around align-middle "
        >
          <div className="bg-blue-800  h-[5vh]"> Text Box 1</div>
          <div className="bg-blue-800">Text Box 2</div>
          <div className="bg-blue-800 "> Text Box 3</div>
          <div className="bg-blue-800 "> Text Box 4</div>
          <div className="bg-blue-800 "> Text Box 5</div>
          <div className="bg-blue-800 "> Text Box 6</div>
          <div className="bg-blue-800 "> Text Box 7</div>
          <div className="bg-blue-800 "> Text Box 8</div>
        </container> */}
        <container
          className="bg-blue-500 col-span-2 row-span-3
         grid gap-1 grid-cols-4 grid-rows-3 place-items-center"
        >
          <h1 className="col-span-4 h-[2vh] m-0 p-0">This is input field</h1>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 1
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 2
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 3
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 4
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 5
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 6
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 7
          </div>
          <div className="bg-blue-800 h-[10vh] w-full flex items-center justify-center">
            Text Box 8
          </div>
        </container>

        <footer className="bg-red-500 col-span-3">This is footer</footer>
      </div>
    </>
  );
};
export default App;
