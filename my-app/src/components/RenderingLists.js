import React from "react";
import Book from "./Book";

function RenderingLists() {
	const bookList = ["to kill a mockingbird", "the expanse", "hamlet"];

	const books = [
		{
			title: "expanse",
			author: "someone cool",
			pages: 234,
		},
		{
			title: "harry potter",
			author: "terf bag",
			pages: 154,
		},
		{
			title: "lord of the rings",
			author: "old man",
			pages: 684,
		},
	];
	return (
		<div>
			{bookList.map((book) => {
				return <h2 key={book}>{book}</h2>;
			})}
			<hr />
			{books.map((book) => {
				return <Book key={book.title} book={book} />;
			})}
		</div>
	);
}

export default RenderingLists;
