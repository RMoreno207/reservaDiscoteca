import React from "react";
import { shallow } from "enzyme";
import Booking from "./Booking";

describe("Booking", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper).toMatchSnapshot();
  });
});
