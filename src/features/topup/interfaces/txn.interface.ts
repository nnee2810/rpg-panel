import { IUser } from "features/users/interfaces"

export interface ITxn {
  id: string
  user: IUser
  transactionNo?: string
  txnRef: string
  responseCode: string
  amount: number
  received: number
  newBalance?: number
  createdAt: Date
  updatedAt: Date
}
