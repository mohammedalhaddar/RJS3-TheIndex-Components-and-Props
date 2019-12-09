//Imports
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Configuration
configure({ adapter: new Adapter() });
// Component
import AuthorsList from "../AuthorsList";
//Data
import authors from "../data";

describe("<AuthorsList />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<AuthorsList authors={authors} />);
    expect(wrapper.find(".authors").exists()).toBe(true);
  });

  it("renders correct number of AuhtorCards", () => {
    const wrapper = mount(<AuthorsList authors={authors} />);
    expect(wrapper.find("AuthorCard").length).toBe(7);
  });

  it("renders different authors", () => {
    const wrapper = mount(<AuthorsList authors={authors} />);
    const cards = wrapper
      .find(".card")
      .map(card => card.find(".card-title").text());
    expect(new Set(cards).size).toEqual(cards.length);
  });

  it("has the correct content in each author card", () => {
    const wrapper = mount(<AuthorsList authors={authors} />);
    wrapper.find(".card").forEach((card, idx) => {
      const image = card.find("img");
      const authorName = card.find(".card-title");
      const books = card.find(".card-text");
      const author = authors[idx];

      expect(image.exists()).toBe(true);
      expect(authorName.exists()).toBe(true);
      expect(books.exists()).toBe(true);

      expect(image.props().src).toBe(author.imageUrl);
      expect(authorName.text()).toContain(
        `${author.first_name} ${author.last_name}`
      );
      expect(books.text()).toContain(`${author.books.length} books`);
    });
  });
});
