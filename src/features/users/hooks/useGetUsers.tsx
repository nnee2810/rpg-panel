import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationData } from "interfaces"
import qs from "query-string"
import { GetUsersDto } from "../dto"
import { IUser } from "../interfaces"

export default function useGetUsers(query: GetUsersDto) {
  const queryString = qs.stringify(query, {
    skipEmptyString: true,
    skipNull: true,
  })

  return useQuery(
    ["get-users", queryString],
    async () =>
      (await API.get<PaginationData<IUser>>(`/users?${queryString}`)).data
  )
}
