import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log('mount');
    const timerId = setInterval(tick, 1000);

    return () => {
      console.log('unmount');
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log('update');
    console.log(date);
  }, [date]);

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}
