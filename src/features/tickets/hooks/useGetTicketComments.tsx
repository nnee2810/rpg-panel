import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { PaginationData } from "interfaces"
import qs from "query-string"
import { ITicketComment } from "../interfaces"

export default function useGetTicketComments(id: string, query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipEmptyString: true,
    skipNull: true,
  })

  return useQuery(
    ["get-ticket-comments", queryString],
    async () =>
      (
        await API.get<PaginationData<ITicketComment>>(
          `/tickets/${id}/comments?${queryString}`
        )
      ).data,
    {
      refetchInterval: 2000,
    }
  )
}
