import { TicketCategory } from "../interfaces"

export interface CreateTicketDto {
  category: TicketCategory
  title: string
  description: string
}
