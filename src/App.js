/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';
import './style/DeckSection.css';
import './style/SectionCardAdd.css';
import './style/Form.css';
import './style/Filter.css';
import './style/Card.css';
import './style/Checkbox.css';
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
      const {
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardName,
        cardDescription,
        cardImage,
        cardRare,
      } = this.state;
      const maxTotal = 210;
      const maxEach = 90;
      const firstCondition = cardName && cardDescription && cardImage && cardRare;
      const secondCondition = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
          + parseInt(cardAttr3, 10) <= maxTotal;
      const thirdCondition = cardAttr1 <= maxEach
      && cardAttr2 <= maxEach && cardAttr3 <= maxEach;
      const fourthCondition = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;
      this.setState({
        isSaveButtonDisabled: !(firstCondition && secondCondition
          && thirdCondition && fourthCondition),
        cardTrunfo: target.checked,
      });
    });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
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
        isSaveButtonDisabled: true,
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
        <h1 id="title">
          Tryunfo
        </h1>
        <section className="new-card">
          <section className="main-container">
            <section className="card-add">
              <div className="form-container">
                <h2>Adicionar nova carta</h2>
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
            </section>
            <section className="card-preview">
              <div className="card-container">
                <h2>Pré-visualização</h2>
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
          </section>
        </section>
        <section className="saved-cards">
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
        </section>
      </>
    );
  }
}

export default App;
