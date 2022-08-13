import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { PaginationResponse } from "interfaces"
import qs from "qs"
import { IClan } from "../interfaces"

export default function useGetClans(query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-clans", queryString],
    async () =>
      (await API.get<PaginationResponse<IClan>>(`/clans?${queryString}`)).data,
    { keepPreviousData: true }
  )
}
