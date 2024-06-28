import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const fetchData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { id, title, url, img }
      })
      setProjects(projects)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return { isLoading, projects }
}

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response.items))
