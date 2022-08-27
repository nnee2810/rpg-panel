import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PageLoading } from "components/core"
import AppRoutes from "components/core/AppRoutes"
import { handleAxiosError } from "helpers"
import "moment/locale/vi"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      onError: handleAxiosError,
    },
    mutations: {
      onError: handleAxiosError,
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
