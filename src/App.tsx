import { BrowserRouter } from "react-router";
import RouteList from "./routes/RouteList";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "./api/_config/reactQueryConfig";
import { message } from "antd";
import { useEffect } from "react";
import { setMessageApi } from "./utils/services/messageService";

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setMessageApi(messageApi);
    return () => setMessageApi(null);
  }, [messageApi]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClientConfig}>
        {contextHolder}
        <RouteList />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
