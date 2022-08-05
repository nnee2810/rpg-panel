import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AxiosError } from "axios"
import AppRoutes from "components/core/AppRoutes"
import { Message } from "configs/constants"
import toast from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"
import ReactTooltip from "react-tooltip"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      onError(error) {
        if (error instanceof AxiosError) {
          toast.error(
            error.response?.data?.message || Message.INTERNAL_SERVER_ERROR
          )
        } else toast.error(Message.INTERNAL_SERVER_ERROR)
      },
    },
    mutations: {
      onError(error) {
        if (error instanceof AxiosError) {
          toast.error(
            error.response?.data?.message || Message.INTERNAL_SERVER_ERROR
          )
        } else toast.error(Message.INTERNAL_SERVER_ERROR)
      },
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ReactTooltip />
    </QueryClientProvider>
  )
}
