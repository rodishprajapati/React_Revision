import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions";

const IncrementApp = () => {
  // const [count, setCount] = useState(0);
  const state = useSelector((state) => state.changeTheNumber);
  console.log(state.cartItems > 0, "state");
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-[2vw]">
        <h1 className="text-2xl">This is an Increment App</h1>

        <h2 className="text-xl">that uses Redux to change count</h2>
      </div>
      <br />
      <div>
        <Button
          type="primary"
          className="mr-[2vw] ml-[2vw]"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </Button>
        {state}
        <Button
          type="primary"
          className="mr-[2vw] ml-[2vw]"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </Button>
      </div>
    </>
  );
};
export default IncrementApp;
