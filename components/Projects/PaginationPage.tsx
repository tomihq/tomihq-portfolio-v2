import Pagination from './Pagination'
import { ProjectCard } from '../ui/ProjectCard';

type PageProps = {
  projects: any[]
  currentPage: number
  totalProjects: number
  perPage: number
}


const PaginationPage = ({
  currentPage,
  totalProjects,
  perPage,
  projects,
}: PageProps): JSX.Element => {
    
  return (
    <div className='flex flex-col  justify-center'>
      <div className='flex flex-col md:flex-row w-full flex-wrap justify-between'>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      <Pagination
        totalItems={totalProjects}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page: number) => `/projects/${page}`}
      />
    </div>
  )
}

export default PaginationPage