import React from "react"
import renderer from "react-test-renderer"
import BlogIndex from "../pages/index"

describe("BlogIndex", () => {
  it("renders correctly", () => {
    const location = {
      pathname: "/",
    }

    const data = {
    "site": {
      "siteMetadata": {
        "title": "MCPortfolio"
      }
    },
    "allSitePage": {
      "edges": [
        {
          "node": {
            "path": "/dev-404-page/"
          }
        },
        {
          "node": {
            "path": "/404/"
          }
        },
        {
          "node": {
            "path": "/"
          }
        },
        {
          "node": {
            "path": "/page-2/"
          }
        },
        {
          "node": {
            "path": "/404.html"
          }
        }
      ]
    }
  }

    const tree = renderer.create(<BlogIndex location={location} data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
