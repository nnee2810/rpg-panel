import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { PageLoading } from "components/core"
import AppRoutes from "components/core/AppRoutes"
import { Message } from "configs/constants"
import "moment/locale/vi"
import { Suspense } from "react"
import toast, { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

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
        <Suspense fallback={<PageLoading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgb(51 65 85)",
            color: "#fff",
          },
        }}
      />
    </QueryClientProvider>
  )
}
