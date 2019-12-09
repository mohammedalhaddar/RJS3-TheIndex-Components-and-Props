//Imports
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Configuration
configure({ adapter: new Adapter() });
// Component
import App from "../App";

describe("<App />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("#app").exists()).toBe(true);
  });

  it("is not just an empty div", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("#app").children().length).toBe(1);
  });

  it("renders div with col-2 class and Sidebar component within it", () => {
    const wrapper = mount(<App />);
    expect(
      wrapper
        .find(".col-2")
        .find("Sidebar")
        .exists()
    ).toBe(true);
  });

  it("renders div with col-10 class and AuthorList component within it", () => {
    const wrapper = mount(<App />);
    expect(
      wrapper
        .find(".col-10")
        .find("AuthorsList")
        .exists()
    ).toBe(true);
  });

  //   it("renders Sidebar component", () => {
  //     const wrapper = mount(<App />);
  //     expect(wrapper.find("Sidebar").exists()).toBe(true);
  //   });

  //   it("renders AuthorList component", () => {
  //     const wrapper = mount(<App />);
  //     expect(wrapper.find("AuthorList").exists()).toBe(true);
  //   });
});
