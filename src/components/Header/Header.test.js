import React from "react"
// import renderer from "react-test-renderer"
import { shallow } from 'enzyme';
import { render } from "react-testing-library"
import Header from "./Header"

describe("Header", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot()
  });

  // it("Displays the correct title", () => {
  //   const Title = () => <h1 data-testid="content"> Mickell Crawford </h1>
  //
  //   const { getByTestId } = render(<Title />)
  //   expect(getByTestId("content")).toHaveTextContent("Mickell Crawford")
  // })
});
