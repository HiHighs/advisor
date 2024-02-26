import { useEffect, useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Press the button to get some advice</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );

  function Message(props) {
    return (
      <p>
        You have read <strong>{props.count}</strong> pieces of advice.
      </p>
    );
  }
}
