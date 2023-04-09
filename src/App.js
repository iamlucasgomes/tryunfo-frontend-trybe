import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  state = {
    cards: [],
    nameFilter: '',
    rarityFilter: 'todas',
    trunfoFilter: false,
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      this.setState({
        isSaveButtonDisabled: (value.length === 0)
          || value >= Number('90')
          || value <= Number('0')
          || Number(cardAttr1)
          + Number(cardAttr2)
          + Number(cardAttr3)
          > Number('210'),
        cardTrunfo: target.checked,
      });
    });
  };

  onSaveButtonClick = () => {
    const { cards,
      cardName,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardRare,
      cardTrunfo } = this.state;

    cards.push({
      Image: cardImage,
      Name: cardName,
      Attr1: cardAttr1,
      Attr2: cardAttr2,
      Attr3: cardAttr3,
      Description: cardDescription,
      Rare: cardRare,
      Trunfo: cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    }, () => {
      this.setState({
        hasTrunfo: cards.some(({ Trunfo }) => Trunfo),
      });
    });
  };

  removeCard = (index) => {
    const { cards } = this.state;
    const arrCards = cards.slice();
    arrCards.splice(index, 1);
    this.setState({
      hasTrunfo: arrCards.some(({ Trunfo }) => Trunfo),
      cards: arrCards,
    });
  };

  filterName = ({ target }) => {
    const { value } = target;
    this.setState({ nameFilter: value });
  };

  filterRarity = ({ target }) => {
    const { value } = target;
    this.setState({ rarityFilter: value });
  };

  filterTrunfo = () => {
    this.setState((prevState) => ({
      trunfoFilter: !prevState.trunfoFilter,
    }));
  };

  render() {
    const {
      cards,
      nameFilter,
      rarityFilter,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      trunfoFilter,
    } = this.state;
    return (
      <>
        <h1>
          Tryunfo
        </h1>
        <section className="main-container">
          <div className="form-container">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="card-container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <div>
          <Deck
            cards={ cards }
            removeCard={ this.removeCard }
            filterName={ this.filterName }
            nameFilter={ nameFilter }
            filterRarity={ this.filterRarity }
            rarityFilter={ rarityFilter }
            filterTrunfo={ this.filterTrunfo }
            trunfoFilter={ trunfoFilter }
          />
        </div>
      </>
    );
  }
}

export default App;
