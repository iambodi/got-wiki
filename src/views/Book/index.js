import React from 'react';
import './book.css';

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
    var myInit = {
      mode: 'cors',
    };
    let charactersTmp = this.state.characters;

    this.props.location.state.povCharacters.map((char) => {
      console.log(char);

      fetch(char, myInit)
        .then((res) => res.json())
        .then(
          (result) => {
            charactersTmp.push(result);
          },
          (error) => {
            console.log(error);

            this.setState({ isLoaded: true, error });
          }
        );
      return null;
    });

    //     this.props.location.state.povCharacters.map(async (char) => {
    //       try {
    //         // console.log(char);

    //         const response = await fetch(char, myInit);
    //         const json = await response.json();

    //         console.log('json :', json);
    //         charactersTmp.push(json);
    //         // this.setState({ isLoaded: true, characters: response });

    //         if (!response.ok) {
    //           throw Error(response.statusText);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     });

    this.setState({ isLoaded: true, characters: charactersTmp });
  }

  displayCharacters() {
    // console.log(this.state);
    if (this.state.isLoaded === true) {
      // let details =
      console.log('wesh', this.state.characters);
      return this.state.characters.map((char, index) => {
        console.log('char name: ', char.name);
        return (
          <div className="lineChars" key="index">
            <div>{char.name}</div>
            <div>details</div>
          </div>
        );
      });
    }
  }

  render() {
    // console.log(this.state.characters);
    return (
      <div>
        <div>
          <h2>Details</h2>
          <div className="container"></div>
        </div>

        <div>
          <h2>Characters</h2>
          <div className="container">
            <div className="lineChars">
              <div>Chars Names</div>
              <div>Details</div>
            </div>
            {this.displayCharacters()}
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
