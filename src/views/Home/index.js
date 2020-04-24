import React from 'react';
import './home.css';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      books: [],
    };
  }

  displayBooks() {
    if (this.state.isLoaded === true && this.state.books.length !== 0) {
      return this.state.books.map((book, index) => {
        let date = book.released.split('T')[0].split('-');
        let urlToBook = book.name.replace(/\s/g, '_');

        return (
          <div className="lineBooks" key={index}>
            <div className="">{book.name}</div>
            <div className="">{`${date[2]}-${date[1]}-${date[0]}`}</div>
            <div className="">{book.numberOfPages}</div>
            <div>
              <Link
                to={{
                  pathname: `/book/${urlToBook}`,
                  state: book,
                }}
                className="booksDetails"
              >
                Details
              </Link>
            </div>
          </div>
        );
      });
    }
  }

  async componentDidMount() {
    let myInit = {
      mode: 'cors',
    };

    try {
      const res = await fetch(
        'https://anapioficeandfire.com/api/books',
        myInit
      );
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const books = await res.json();
      this.setState({
        isLoaded: true,
        books: books,
      });
    } catch (error) {
      this.setState({ isLoaded: true, error });
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Breadcrumb currentPage="Books" />

        <div className="containerBooks">
          <div className="lineBooks firstLineBooks">
            <div>Book Name</div>
            <div>Released Date</div>
            <div>Number Of Pages</div>
            <div>Details</div>
          </div>
          {this.displayBooks()}
        </div>
      </div>
    );
  }
}

export default Home;
