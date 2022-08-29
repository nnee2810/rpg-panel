import { IUser } from "features/users/interfaces"
import { ITicket } from "."

export interface ITicketComment {
  id: number
  user: IUser
  userId: number
  ticket: ITicket
  ticketId: number
  content: string
  createdAt: string
  updatedAt: string
}
