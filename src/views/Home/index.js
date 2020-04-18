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
        return (
          <div className="lineBooks" key={index}>
            <div>{book.name}</div>
            <div>{book.released.split('T')[0]}</div>
            <div>{book.numberOfPages}</div>
            <div>
              <Link
                to={{
                  pathname: '/book',
                  state: book,
                }}
              >
                Details
              </Link>
            </div>
          </div>
        );
      });
    }
  }

  componentDidMount() {
    var myInit = {
      mode: 'cors',
    };

    fetch('https://anapioficeandfire.com/api/books', myInit)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, books: result });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    console.log(this.state.books);

    return (
      <div>
        <Breadcrumb currentPage="Books" />

        <div className="containerBooks">
          <div className="lineBooks">
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
