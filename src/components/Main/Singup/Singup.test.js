import React from "react";
import { shallow } from "enzyme";
import Singup from "./Singup";

describe("Singup", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Singup />);
    expect(wrapper).toMatchSnapshot();
  });
});
