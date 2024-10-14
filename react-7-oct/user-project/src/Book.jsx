import { useState } from "react";
import axios from "axios";
function Book() {
  let [bookName, setBookName] = useState("");
  let [ISBN, setISBN] = useState("");
  let [publication, setPublication] = useState("");
  let [author, setAuthor] = useState("");
  let [edition, setEdition] = useState("");
  let [books, setBooks ] = useState([])
  function submitData() {
    bookName = document.getElementById("bookName").value;
    setBookName(bookName);
    // alert(firstName);
    ISBN = document.getElementById("ISBN").value;
    // alert(lastName);
    setISBN(ISBN);
    publication = document.getElementById("publication").value;
    setPublication(publication);
    // alert(email);
    author = document.getElementById("author").value;
    setAuthor(author);
    // alert(mobileNo);
    edition = document.getElementById("edition").value;
    setEdition(edition);
    let data = {
        bookName : bookName,
        ISBN : ISBN,
        publication : publication,
        author : author,
        edition : edition,
    };
    // alert(password);
    // * axios is using to export the whole ui element at nodeJs backend
    axios({
      url: "http://localhost:3000/add/book",
      method: "post",
      data: data
    })
      .then((data) => {
        console.log(data)
        if (data.data.success) {
          alert("Data is added successfully")
          books = data.data.books
          setBooks(data.data.books)
        }
      }).catch((error) => {
        alert('Something went wrong...')   
        console.error(error)
         });
  }
  return (
    <div>
      <h3>Add Book</h3>
      <table>
        <tr>
          <td>Book Name:</td>
          <td>
            <input type="text" id="bookName" />
          </td>
        </tr>
        <tr>
          <td>ISBN:</td>
          <td>
            <input type="text" id="ISBN" />
          </td>
        </tr>
        <tr>
          <td>Publication:</td>
          <td>
            <input type="text" id="publication"
             />
          </td>
        </tr>
        <tr>
          <td>Author :</td>
          <td>
            <input type="text" id="author" />
          </td>
        </tr>
        <tr>
          <td>Edition:</td>
          <td>
            <input type="text" id="edition" />
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={submitData}>submit</button>
          </td>
        </tr>
        {books.map((book, j) => (
          <tr key={j}>
            <td>{book.bookName}</td>
            <td>{book.publication}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Book;
