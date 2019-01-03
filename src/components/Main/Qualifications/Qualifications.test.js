import React from "react"
import renderer from "react-test-renderer"
import Qualifications from "./Qualifications"

describe("Qualifications", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Qualifications />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
