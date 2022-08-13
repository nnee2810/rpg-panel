import { PaginationDto } from "dto"

export interface GetUsersDto extends PaginationDto {
  name?: string
  Status?: number
  Admin?: number
  isAdmin?: boolean
  Helper?: number
  isHelper?: boolean
  Leader?: number
  isLeader?: boolean
  Member?: number
  Job?: number
}
