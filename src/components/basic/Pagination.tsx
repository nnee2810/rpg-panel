import clsx from "clsx"
import { LayoutGroup, motion } from "framer-motion"
import usePagination, { UsePaginationProps } from "hooks/usePagination"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

interface PaginationProps extends UsePaginationProps {
  onPageChange(value: number): void
}

export default function Pagination({
  currentPage,
  totalPage,
  siblingCount,
  onPageChange,
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalPage,
    siblingCount,
  })

  const nextPage = () => {
    onPageChange(currentPage + 1)
  }
  const previousPage = () => {
    onPageChange(currentPage - 1)
  }

  return totalPage ? (
    <LayoutGroup>
      <div className="mt-4 flex justify-center gap-x-2">
        <button
          className="w-10 h-10 flex justify-center items-center text-2xl bg-gray-800 hover:bg-gray-700 rounded-md transition"
          disabled={currentPage <= 1}
          onClick={previousPage}
        >
          <BiChevronLeft />
        </button>
        {paginationRange?.map((item, idx) => (
          <div
            className="relative w-10 h-10 bg-gray-700/50 hover:bg-gray-700 rounded-md transition"
            key={idx}
          >
            <button
              className={clsx(
                "absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-md z-20"
              )}
              onClick={() => typeof item === "number" && onPageChange(item)}
            >
              {item}
            </button>
            {item === currentPage && (
              <motion.div
                layoutId="pagination"
                className="absolute top-0 left-0 w-full h-full bg-emerald-500 rounded-md shadow-xl shadow-emerald-500/50 z-10"
              />
            )}
          </div>
        ))}
        <button
          className="w-10 h-10 flex justify-center items-center text-2xl bg-gray-800 hover:bg-gray-700 rounded-md transition"
          disabled={currentPage >= totalPage}
          onClick={nextPage}
        >
          <BiChevronRight />
        </button>
      </div>
    </LayoutGroup>
  ) : null
}
