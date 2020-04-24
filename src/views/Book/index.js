import React from 'react';
import './book.css';
import Breadcrumb from '../../components/Breadcrumb';
import { Link, Redirect } from 'react-router-dom';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      characters: [],
      error: null,
    };
  }

  async componentDidMount() {
    if (this.props.location.state) {
      let myInit = {
        mode: 'cors',
      };
      const povCharacters = this.props.location.state.povCharacters;

      if (povCharacters) {
        povCharacters.forEach(async (char) => {
          try {
            const res = await fetch(char, myInit);
            if (!res.ok) {
              throw Error(res.statusText);
            }
            const character = await res.json();
            this.setState({
              isLoaded: true,
              characters: [...this.state.characters, character],
            });
          } catch (error) {
            this.setState({ isLoaded: true, error });
            console.error(error);
          }
        });
      }
    }
  }

  displayCharacters() {
    if (this.state.isLoaded === true) {
      return this.state.characters.map((char, index) => {
        let urlToChar = char.name.replace(/\s/g, '_');

        return (
          <div className="lineChars" key={index}>
            <div>{char.name}</div>
            <div>
              <Link
                to={{
                  pathname: `/character/${urlToChar}`,
                  state: char,
                }}
                className="charDetails"
              >
                Details
              </Link>
            </div>
          </div>
        );
      });
    }
  }

  displayAuthor(authors) {
    return authors.map((author) => {
      return author;
    });
  }

  render() {
    if (this.props.location.state) {
      let book = this.props.location.state;
      let date = book.released.split('T')[0].split('-');

      return (
        <div>
          <div>
            <Breadcrumb currentPage={`Books / ${book.name}`} />
            <h2 className="title">Details</h2>
            <div className="container">
              <ol className="bookDetails">
                <li>Name: {book.name}</li>
                <li>ISBN: {book.isbn}</li>

                <li>Authors: {this.displayAuthor(book.authors)} </li>
                <li>Publisher: {book.publisher}</li>
                <li>Released: {`${date[2]}-${date[1]}-${date[0]}`}</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="title">Characters</h2>
            <div className="container containerChars">
              <div className="lineChars firstLineChars">
                <div>Chars Names</div>
                <div>Details</div>
              </div>
              {this.displayCharacters()}
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Book;
