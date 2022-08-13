import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationResponse } from "interfaces"
import qs from "qs"
import { GetUsersDto } from "../dto"
import { IUser } from "../interfaces"

export default function useGetUsers(query: GetUsersDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-users", queryString],
    async () =>
      (await API.get<PaginationResponse<IUser>>(`/users?${queryString}`)).data,
    { keepPreviousData: true }
  )
}
