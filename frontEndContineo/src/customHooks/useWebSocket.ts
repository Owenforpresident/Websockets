import { useState, useEffect } from "react";

interface WebSocketData {
  [key: string]: any;
}

interface WebSocketError extends Event {}

interface WebSocketHook {
  data: WebSocketData | null;
  error: WebSocketError | null;
  isLoading: boolean;
}

function useWebSocket(url: string): WebSocketHook {
  const [data, setData] = useState<WebSocketData | null>(null);
  const [error, setError] = useState<WebSocketError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      setIsLoading(false);
    };

    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    ws.onerror = (event) => {
      setIsLoading(false);
      setError(event);
    };
  }, [url]);

  return { data, error, isLoading };
}

export default useWebSocket;
