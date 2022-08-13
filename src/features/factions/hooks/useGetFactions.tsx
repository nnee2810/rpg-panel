import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { PaginationResponse } from "interfaces"
import qs from "qs"
import { IFaction } from "../interfaces"

export default function useGetFactions(query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-factions", queryString],
    async () =>
      (await API.get<PaginationResponse<IFaction>>(`/factions?${queryString}`))
        .data,
    { keepPreviousData: true }
  )
}
