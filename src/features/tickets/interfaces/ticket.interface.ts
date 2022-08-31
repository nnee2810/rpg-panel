import { IUser } from "features/users/interfaces"

export enum TicketCategory {
  GENERAL = "GENERAL",
  ACCOUNT = "ACCOUNT",
  DONATE = "DONATE",
  BUG = "BUG",
}

export enum TicketStatus {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

export interface ITicket {
  id: number
  user: IUser
  assignTo?: IUser
  closeBy?: IUser
  category: TicketCategory
  status: TicketStatus
  title: string
  description: string
  createdAt: string
  updatedAt: string
}
