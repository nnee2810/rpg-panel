import { PaginationDto } from "dto"
import { TicketCategory, TicketStatus } from "../interfaces"

export interface GetTicketsDto extends PaginationDto {
  userId?: number
  category?: TicketCategory
  status?: TicketStatus
  title?: string
}
