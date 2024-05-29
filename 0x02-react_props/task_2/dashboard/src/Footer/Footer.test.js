import React from "react";
import Footer from "./Footer";
import { shallow} from "enzyme";
import { getFooterCopy, getFullYear } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it("it should render the Copyright text", () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});