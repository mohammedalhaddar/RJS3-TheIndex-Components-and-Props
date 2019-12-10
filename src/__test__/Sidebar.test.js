//Imports
import React from "react";
import { shallow } from "enzyme";

// Component
import Sidebar from "../Sidebar";

describe("<Sidebar />", () => {
  it("renders the correct content", () => {
    const wrapper = shallow(<Sidebar />);
    const sidebar = wrapper.find("#sidebar");
    const image = wrapper.find("img");
    const section = wrapper.find("section");
    const h4 = wrapper.find("h4");
    const button = wrapper.find("button");

    expect(sidebar.exists()).toBe(true);
    expect(image.exists()).toBe(true);
    expect(section.exists()).toBe(true);
    expect(h4.exists()).toBe(true);
    expect(button.exists()).toBe(true);

    expect(image.props().src).toBe("theindex.svg");
    expect(button.text()).toContain("AUTHORS");
  });
});
