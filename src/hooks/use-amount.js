import { useState } from 'react';

export default function useAmount(initialAmount) {
  const [amount, setAmount] = useState(initialAmount);
  const decrement = () => setAmount(amount > 0 ? amount - 1 : 0);
  const increment = () => setAmount(amount < 10 ? amount + 1 : 10);

  return { amount, decrement, increment };
}
