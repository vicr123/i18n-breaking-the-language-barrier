function numberOfBooks(books) {
    if (books === 1) {
        return t("BOOK_SINGULAR", { books: 1 });
    } else {
        return t("BOOK_PLURAL", { books: books });
    }
}
