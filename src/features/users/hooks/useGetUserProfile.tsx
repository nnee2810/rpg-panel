import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { IUser } from "../interfaces"

export default function useGetUserProfile(name: string) {
  return useQuery(["get-user-profile", name], () =>
    API.get<IUser>(`/users/profile/${name}`)
  )
}
