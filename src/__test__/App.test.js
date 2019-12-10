//Imports
import React from "react";
import { shallow } from "enzyme";
// Component
import App from "../App";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders correctly", () => {
    expect(wrapper.find("#app").exists()).toBe(true);
  });

  it("is not just an empty div", () => {
    expect(wrapper.find("#app").children().length).toBe(1);
  });

  it("renders div with col-2 class and Sidebar component within it", () => {
    expect(
      wrapper
        .find(".col-2")
        .find("Sidebar")
        .exists()
    ).toBe(true);
  });

  it("renders div with col-10 class and AuthorsList component within it", () => {
    expect(
      wrapper
        .find(".col-10")
        .find("AuthorsList")
        .exists()
    ).toBe(true);
  });
});
