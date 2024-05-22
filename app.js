let booklist = [];


const toggleModel = () => {
    const basketModelEl = document.querySelector(".basket__model");
    basketModelEl.classList.toggle("active")
};

const getBooks = () => {
    fetch("./products.json")
        .then(res => res.json())
        .then((books) => (bookList = books));
};

