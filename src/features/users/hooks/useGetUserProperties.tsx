import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { IBizz, IHouse, IVehicle } from "../interfaces"

interface GetUserPropertiesResponse {
  vehicles: IVehicle[]
  house?: IHouse
  bizz?: IBizz
}

export default function useGetUserProperties(name: string) {
  return useQuery(
    ["get-user-properties", name],
    async () =>
      (await API.get<GetUserPropertiesResponse>(`/users/${name}/properties`))
        .data
  )
}
