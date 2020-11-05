import { useExample } from "../context/Example";

function ExampleConsumer() {
  const [value, setValue] = useExample();
  return (
    <>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </>
  );
}

export default ExampleConsumer;
