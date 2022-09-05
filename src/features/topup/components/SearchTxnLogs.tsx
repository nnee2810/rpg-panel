import { Input } from "components"
import debounce from "lodash/debounce"
import { ChangeEvent } from "react"
import { GetTxnLogsDto } from "../dto"

interface SearchTxnLogsProps {
  updateQuery(values: GetTxnLogsDto): void
}

export default function SearchTxnLogs({ updateQuery }: SearchTxnLogsProps) {
  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    updateQuery({
      name: e.target.value,
    })
  }, 300)

  return (
    <div className="flex justify-end">
      <Input placeholder="Tìm giao dịch theo tên..." onChange={handleSearch} />
    </div>
  )
}
