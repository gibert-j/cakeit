import { useStaticQuery, graphql } from 'gatsby'

const useAboutQuery = () => {
    const data = useStaticQuery(graphql`
    query {
        wpPage(databaseId: {eq: 47}) {
          content
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
        }
      }`)
      return data
}
export default useAboutQuery