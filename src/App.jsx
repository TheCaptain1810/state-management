import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  }

  return (
    <div>
      <Button count={count} handleClick={handleClick} />
      <Button count={count} handleClick={handleClick} />
    </div>
  )
}

export default App
