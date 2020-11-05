import { useExample } from '../context/Example';

function ExampleConsumer() {
  const [value] = useExample();
  return (
    <h1>{value}</h1>
  )
}

export default ExampleConsumer;
