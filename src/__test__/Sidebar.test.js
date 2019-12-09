//Imports
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Configuration
configure({ adapter: new Adapter() });
// Component
import Sidebar from "../Sidebar";

describe("<Sidebar />", () => {
  it("copied the correct div", () => {
    const wrapper = mount(<Sidebar />);
    const sidebar = wrapper.find("#sidebar");
    const image = wrapper.find("img");
    const section = wrapper.find("section");
    const h4 = wrapper.find("h4");
    const button = wrapper.find("button");

    expect(sidebar.exists()).toBeTruthy();
    expect(image.exists()).toBeTruthy();
    expect(section.exists()).toBeTruthy();
    expect(h4.exists()).toBeTruthy();
    expect(button.exists()).toBeTruthy();

    expect(image.props().src).toBe("theindex.svg");
    expect(button.text()).toContain("AUTHORS");
  });
});
