import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"

export default function useGetTicketsStatistic() {
  return useQuery(
    ["get-tickets-statistic"],
    async () =>
      (
        await API.get<{
          openTickets: number
          closeTickets: number
        }>("/statistic/tickets")
      ).data
  )
}
