import { PaginationDto } from "dto"
import { TicketCategory, TicketStatus } from "../interfaces"

export interface GetTicketsDto extends PaginationDto {
  userId?: number
  category?: TicketCategory
  status?: TicketStatus
  assignToId?: number
  title?: string
}
