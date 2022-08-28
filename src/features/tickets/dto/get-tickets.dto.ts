import { PaginationDto } from "dto"
import { TicketCategory, TicketStatus } from "../interfaces"

export interface GetTicketsDto extends PaginationDto {
  userId?: number
  category?: TicketCategory | null
  status?: TicketStatus | null
  title?: string
}
