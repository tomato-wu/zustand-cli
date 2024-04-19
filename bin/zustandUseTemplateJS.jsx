/* JavaScript Zustand usage */
import React, { useEffect } from "react";
import zustandTemplateJS from "./zustandTemplateJS";

const ZustandUseTemplateJS = () => {
  const {
    count,
    isLoading,
    error,
    increment,
    decrement,
    reset,
    fetchData,
    doubleCount,
  } = zustandTemplateJS((state) => ({
    count: state.count,
    isLoading: state.isLoading,
    error: state.error,
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
    fetchData: state.fetchData,
    doubleCount: state.doubleCount,
  }));

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts/1");
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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

export default ZustandUseTemplateJS;
