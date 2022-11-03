let book = {
  BookId: 1,
  Title: "coolBook",
  Author: "Me",
};

fetch("localhost:3001/create", {
  method: "post",
  data: JSON.stringify(book),
});
