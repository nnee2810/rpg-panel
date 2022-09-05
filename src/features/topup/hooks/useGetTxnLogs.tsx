import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { PaginationData } from "interfaces"
import qs from "query-string"
import { GetTxnLogsDto } from "../dto"
import { ITxn } from "../interfaces"

export default function useGetTxnLogs(query: GetTxnLogsDto) {
  const queryString = qs.stringify(query, {
    skipEmptyString: true,
    skipNull: true,
  })

  return useQuery(
    ["get-txn-logs", queryString],
    async () =>
      (await API.get<PaginationData<ITxn>>(`/topup/txn?${queryString}`)).data
  )
}
