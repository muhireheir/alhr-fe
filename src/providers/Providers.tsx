
import RoutesProvider from "./RoutesProvider";
import { AuthProvider } from "react-auth-kit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers = () => {
  const queryClient = new QueryClient();
  return (
    <AuthProvider authName='alhr' authType='cookie'>
          <QueryClientProvider client={queryClient}>
            <RoutesProvider />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
    </AuthProvider>
  );
};

export default Providers;
