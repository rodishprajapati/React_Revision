import { arrayData, Data } from "./Data/Data";

// array map filter reduce
const App = () => {
  const ageFilteredData = arrayData.filter(({ age }) => age <= 50);

  //reduce
  const sumData = Data.reduce((acc, curr) => acc + curr, 0);
  //remove repetation
  const repetationFilteredData = Data.filter(
    (n, index, self) => self.indexOf(n) === index
  );

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold  flex justify-center">
          Array Manupulation
        </h1>
        <div>
          <div className="text-xl">Data in array:</div>
          <br />
          <div>
            ArrayData:
            {arrayData.map((el, index) => (
              <li key={index} className="flex flex-row">
                <div className="ml-[5vw] mr-[10vw]">{el.name}</div>
                <div>{el.age}</div>
                <hr />
              </li>
            ))}
          </div>
          <div>
            Data:
            {Data.map((el, index) => (
              <li key={index} className="flex flex-col">
                <div className="ml-[5vw] mr-[10vw]">{el}</div>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[10vh] ">
        <h2 className="text-xl"> Array Filter Data:</h2>
        <br />
        Filter Array Data with respect to age greater equals to 50
        <div>
          {ageFilteredData.map((el, index) => (
            <li key={index} className="flex justify-between">
              <div>{el.name}</div>
              <div>{el.age}</div>
              <hr />
            </li>
          ))}
        </div>
        <div>
          <br />
          <h2 className="">Filtered Data array with no repetation </h2>
          {repetationFilteredData.map((el, index) => (
            <ul key={index} className="flex ">
              <div>{el}</div>
              <hr />
            </ul>
          ))}
        </div>
      </div>
      <br />
      <div>
        <h2 className="text-xl"> Array Reducer</h2>
        <h3>Sum of Data:</h3>
        {sumData}
      </div>
    </>
  );
};

export default App;
