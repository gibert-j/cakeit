import { useStaticQuery, graphql } from "gatsby";

// possible bug: tutorial wants to use "allWpPost(sort: { fields: date, order: DESC})" but instead I used "allWpPost(sort: {date: DESC})", which seems like the new approach.
export const useLatestBlogPost = () => {
    const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: {date: DESC}) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }`)
    return data
}