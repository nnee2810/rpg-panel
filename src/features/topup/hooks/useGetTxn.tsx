import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { ITxn } from "../interfaces"

export default function useGetTxn(txnRef: string) {
  return useQuery(
    ["get-txn", txnRef],
    async () => (await API.get<ITxn>(`/topup/txn/${txnRef}`)).data
  )
}
