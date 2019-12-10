import casual from "casual";

casual.seed(555);

export const fakeBook = overrides => ({
  title: casual.title,
  color: casual.color_name,
  ...overrides
});

export const fakeAuthor = overrides => ({
  first_name: casual.first_name,
  last_name: casual.last_name,
  imageUrl: casual.url,
  books: [fakeBook(), fakeBook(), fakeBook()],
  ...overrides
});
