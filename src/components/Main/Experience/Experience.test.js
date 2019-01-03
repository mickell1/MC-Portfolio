import React from "react"
import renderer from "react-test-renderer"
import Experience from "./Experience"

describe("Experience", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Experience />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
