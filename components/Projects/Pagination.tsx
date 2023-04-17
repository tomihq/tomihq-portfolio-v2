import Link from 'next/link'
import usePagination from '../../hooks/usePagination'

export type PaginationProps = {
  totalItems: number
  currentPage: number
  renderPageLink: (page: number) => string
  itemsPerPage?: number
}

export const dotts = '...'

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
}: PaginationProps) => {
  const pages = usePagination(totalItems, currentPage, itemsPerPage)

  return (
    <div className="flex items-center justify-center my-8">
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm font-semibold text-black dark:text-white"
          >
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={renderPageLink(pageNumber as number)}
            className={`${
              pageNumber === currentPage ? 'dark:text-white text-gray-800 font-bold border-2 px-2 rounded-lg' : ' dark:text-gray-400 text-black px-2'
            }  py-2 mx-1  text-base font-semibold no-underline`}
            passHref
          >
            {pageNumber}
          </Link>
        )
      )}
    </div>
  )
}

export default Pagination