import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { IClan } from "../interfaces"

export default function useGetClanOverview(id: string) {
  return useQuery(
    ["get-clan-overview", id],
    async () => (await API.get<IClan>(`clans/${id}/overview`)).data
  )
}
