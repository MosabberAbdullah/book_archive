const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  searchField.value = "";

  // no result found
  if (searchText.length === 0) {
    console.log("No result found. \n Please input valid book name");
  } else {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    //   console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.docs));
  }
};

const displaySearchResult = (books) => {
  const searchResult = document.getElementById("search-result");
  books.forEach((book) => {
    console.log(book);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div  class="card h-100">
            <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..."> 
                <div class="card-body">
                    <p class="card-author-name">Author Name: ${book.author_name}</p>
                    <p class="card-title">Title: ${book.title}</p>
                    <p class="card-publisher">Publisher: ${book.publisher[0]}</p>
                    <p class="card-publish-year">Publish Year: ${book.first_publish_year}</p>
                </div>
            </div>
        `;
    searchResult.appendChild(div);
  });
};
