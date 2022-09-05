import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationData } from "interfaces"
import qs from "query-string"
import { GetTicketsDto } from "../dto"
import { ITicket } from "../interfaces"

export default function useGetTickets(query: GetTicketsDto) {
  const queryString = qs.stringify(query, {
    skipEmptyString: true,
    skipNull: true,
  })

  return useQuery(
    ["get-tickets", queryString],
    async () =>
      (await API.get<PaginationData<ITicket>>(`/tickets?${queryString}`)).data,
    {
      refetchInterval: 2000,
    }
  )
}
