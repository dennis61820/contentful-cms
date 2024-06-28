import { useFetchData } from './fetchProjects'
// import './fetchProjects'
const Projects = () => {
  const { isLoading, projects } = useFetchData()
  if (isLoading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((item) => {
          return (
            <a
              target='_blank'
              rel='noreferrer'
              className='project'
              href={item.url}
              key={item.id}
            >
              <img src={item.img} alt={item.title} className='img' />
              <h5>{item.title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
