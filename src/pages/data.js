import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulAuthor1 {
        edges {
          node {
            title
            description
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
    console.log(data.allContentfulAuthor1.edges)
    const dataarr = data.allContentfulAuthor1.edges;
    return (
        <div>
            {dataarr.map((item) => (
                <>{item.node.title}
                    <img style={{ height: '100px' }} src={item.node.image.fluid.src}></img></>
            ))}
        </div>
    )
}

export default ComponentName
