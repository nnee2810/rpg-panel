import { useMutation } from "@tanstack/react-query"
import { API } from "configs/api"
import { ITicket } from "../interfaces"

export default function useUpdateTicket() {
  return useMutation(
    async ({ id, ...data }: Partial<ITicket>) =>
      (await API.patch<ITicket>(`/tickets/${id}`, data)).data
  )
}
