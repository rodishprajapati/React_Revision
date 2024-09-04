import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-rows">
      <Button
        type="primary"
        className="mr-2"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </Button>
      <div>currently count is {count}</div>

      <Button
        type="primary"
        className="ml-2"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
    </div>
  );
}

export default App;
