import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { ITicket } from "../interfaces"

export default function useGetTicket(id: string) {
  return useQuery(
    ["get-ticket", id],
    async () => (await API.get<ITicket>(`/tickets/${id}`)).data,
    {
      refetchInterval: 2000,
    }
  )
}
