import { IUser } from "features/users/interfaces"

export enum TicketCategory {
  ALL = "ALL",
  GENERAL = "GENERAL",
  ACCOUNT = "ACCOUNT",
  TOPUP = "TOPUP",
  BUG = "BUG",
}

export enum TicketStatus {
  ALL = "ALL",
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

export interface ITicket {
  id: number
  user: IUser
  assignTo?: IUser
  category: TicketCategory
  status: TicketStatus
  title: string
  description: string
  createdAt: string
  updatedAt: string
}
