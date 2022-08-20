import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { IFaction } from "../interfaces"

export default function useGetFactionOverview(id: string) {
  return useQuery(
    ["get-faction-overview", id],
    async () => (await API.get<IFaction>(`/factions/${id}/overview`)).data
  )
}
