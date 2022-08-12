export interface PaginationResponse<T = unknown> {
  data: T[]
  total: number
  page: number
  take: number
}
