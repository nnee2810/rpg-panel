import { IUser } from "features/users/interfaces"

export interface IFactionLog {
  id: number
  player: number
  leader: number
  Text: string
  time: string
}

export interface IFaction {
  ID: number
  Name?: string
  X?: number
  Y: number
  Z: number
  Interior?: number
  IntX: number
  IntY: number
  IntZ: number
  VW?: number
  Mats: number
  Drugs: number
  Bank: number
  Anunt?: string
  PaydayMoney: number
  Name1: string
  Name2: string
  Name3: string
  Name4: string
  Name5: string
  Name6: string
  Name7: string
  App: number
  Lock: number
  Slots: number
  Level: number
  Rank1?: number
  Rank2?: number
  Rank3?: number
  Rank4?: number
  Rank5?: number
  Rank6?: number
  Members: number
  Leader?: IUser
}
