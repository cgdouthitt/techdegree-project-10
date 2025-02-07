import { createContext, useState } from "react";

const LoadingContext = createContext(null);

export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <LoadingContext.Provider
      value={{
        data,
        loading,
        error,
        actions: {
          setData,
          setLoading,
          setError,
        },
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
