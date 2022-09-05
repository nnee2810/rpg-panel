import { useMemo } from "react"
import { generateNumberRange } from "utils"

export interface UsePaginationProps {
  currentPage: number
  totalPage: number
  siblingCount?: number
}

export default function usePagination({
  currentPage,
  totalPage,
  siblingCount = 1,
}: UsePaginationProps) {
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totaltotalPage]
    */
    if (totalPageNumbers >= totalPage) {
      return generateNumberRange(1, totalPage)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPage)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPage - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPage

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = generateNumberRange(1, leftItemCount)

      return [...leftRange, "...", totalPage]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = generateNumberRange(
        totalPage - rightItemCount + 1,
        totalPage
      )
      return [firstPageIndex, "...", ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = generateNumberRange(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex]
    }
  }, [currentPage, totalPage, siblingCount])

  return paginationRange
}
