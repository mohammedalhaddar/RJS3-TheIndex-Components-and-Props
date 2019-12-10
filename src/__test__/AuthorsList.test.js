//Imports
import React from "react";
import { shallow } from "enzyme";

// Component
import AuthorsList from "../AuthorsList";

//Mocks
import { fakeAuthor } from "../testUtils";

describe("<AuthorsList />", () => {
  let wrapper;
  const authors = Array.from({ length: Math.floor(Math.random() * 20) }, () =>
    fakeAuthor()
  );
  beforeEach(() => {
    wrapper = shallow(<AuthorsList authors={authors} />);
  });

  it("renders correctly", () => {
    expect(wrapper.find(".authors").exists()).toBe(true);
  });

  it("renders correct number of AuthorCards", () => {
    expect(wrapper.find("AuthorCard").length).toBe(authors.length);
  });

  it("renders different authors", () => {
    const cards = wrapper
      .find(".card")
      .map(card => card.find(".card-title").text());
    expect(new Set(cards).size).toEqual(cards.length);
  });

  it("has the correct content in each author card", () => {
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
