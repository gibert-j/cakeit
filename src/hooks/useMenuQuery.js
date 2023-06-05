import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            id
            parentId
            childItems {
              nodes {
                id
                url
                label
                childItems {
                  nodes {
                    id
                    url
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}
