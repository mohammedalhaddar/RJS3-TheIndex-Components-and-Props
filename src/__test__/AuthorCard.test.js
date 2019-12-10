//Imports
import React from "react";
import { shallow } from "enzyme";

// Component
import AuthorCard from "../AuthorCard";

//Mocks
import { fakeAuthor } from "../testUtils";

describe("<AuthorCard />", () => {
  it("renders the correct content", () => {
    const author = fakeAuthor();
    const wrapper = shallow(<AuthorCard author={author} />);
    const image = wrapper.find("img");
    const authorName = wrapper.find(".card-title");
    const books = wrapper.find(".card-text");

    expect(image.exists()).toBe(true);
    expect(authorName.exists()).toBe(true);
    expect(books.exists()).toBe(true);

    expect(image.props().src).toBe(author.imageUrl);
    expect(authorName.text()).toContain(
      `${author.first_name} ${author.last_name}`
    );
  });
});
