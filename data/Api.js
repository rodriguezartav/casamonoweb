import React, { useState, useEffect, useCallback } from "react";

export async function query(route, body) {
  // Call an external API endpoint to get posts

  try {
    // Fetch data and remember product id

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/${route}`,
      {
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          authorization: "Bearer undefined",
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
        method: "POST",
      }
    );

    const json = await response.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json;
  } catch (e) {
    console.log(e);
    return {
      message: e.message || "Server Error",
      status: e.status || e.statusCode || 500,
    };
  }
}

export const useFetch = (url, opts, sideEffects) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setLoading(true);
    query(url, opts)
      .then((res) => {
        if (sideEffects) sideEffects(res);
        setResponse(res.data);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url]);
  return [response, loading, hasError];
};

export const useMutation = (url, opts, sideEffects) => {
  const [state, setState] = React.useState({
    data: null,
    error: null,
    loading: false,
    loaded: false,
  });

  const mutate = useCallback(
    (callTimeOptions) => {
      const params = { ...opts, ...callTimeOptions };

      setState((prevState) => ({ ...prevState, loading: true }));

      return query(url, params)
        .then((res) => {
          const { data } = res;
          if (sideEffects) sideEffects(data);
          setState({
            data,
            loading: false,
            loaded: true,
          });
          return data;
        })
        .catch((errorFromResponse) => {
          setState({
            error: errorFromResponse,
            loading: false,
            loaded: false,
          });
        });
    },
    [JSON.stringify({ url, opts }), setState]
  );
  return [mutate, state];
};
