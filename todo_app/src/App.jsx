import { useState, useEffect, useCallback } from "react";
import { Button, Input, List, Modal } from "antd";
import { MdDelete, MdOutlineModeNight } from "react-icons/md";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = useCallback(() => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
      console.log("heloo");
    }
  }, [input, todos]);
  const deleteItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  //useMemo

  //add note modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleAddTodo();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-70vh w-70vw bg-blue-50">
      <div className="font-bold flex justify-center items-center mt-[10vh]">
        TODO LIST
      </div>
      <div className="flex flex-row justify-around">
        <div>
          <Input
            placeholder="Search Note"
            className=" m-[10vh]  mt-[5vh] mb-2"
          />
        </div>
        <div>
          <Button
            className="bg-purple-400
          m-[10vh]  mt-[5vh] mb-2
          "
          >
            <MdOutlineModeNight />
          </Button>
        </div>
      </div>
      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item actions={[]}>
            {item}
            <Button
              onClick={() => deleteItem(index)}
              className="bg-purple-400 absolute right-10  "
            >
              <MdDelete className="" />
            </Button>
          </List.Item>
        )}
        className="mr-[10vh] ml-[10vh] "
      />
      <div className="flex mb-4">
        <Button
          type="primary"
          // onClick={handleAddTodo}
          onClick={showModal}
          className="flex-shrink-0 rounded-full bg-purple-500 ml-auto mr-[10vh] mt-[5vh] absolute  right-10 h-[4vh]
          text-3xl items-center 
          "
        >
          +
        </Button>

        <Modal
          title="New Note"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            className="flex-1 mr-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Input Your Note...."
          />
        </Modal>
      </div>
    </div>
  );
};

export default TodoApp;
