/* typeScript Zustand usage */
import React from "react";
import zustandTemplateTS from "../bin/zustandTemplateTS";

const ZustandUseTemplateTS: React.FC = () => {
  const {
    count,
    isLoading,
    error,
    increment,
    decrement,
    reset,
    fetchData,
    doubleCount,
  } = zustandTemplateTS((state) => ({
    count: state.count,
    isLoading: state.isLoading,
    error: state.error,
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
    fetchData: state.fetchData,
    doubleCount: state.doubleCount,
  }));

  React.useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts/1");
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ZustandUseTemplateTS;
