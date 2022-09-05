import { PaginationDto } from "dto"

export interface GetTxnLogsDto extends PaginationDto {
  name?: string
}
