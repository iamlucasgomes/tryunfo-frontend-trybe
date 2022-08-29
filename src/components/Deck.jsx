import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const {
      cards,
      removeCard,
      filterName,
      nameFilter,
    } = this.props;

    const namesFiltered = cards
      .filter(({ Name }) => Name.includes(nameFilter))
      .map(({ Name,
        Description,
        Attr1,
        Attr2,
        Attr3,
        Image,
        Trunfo,
        Rare,
      }) => (
        <>
          <Card
            key={ Name }
            cardName={ Name }
            cardDescription={ Description }
            cardAttr1={ Attr1 }
            cardAttr2={ Attr2 }
            cardAttr3={ Attr3 }
            cardImage={ Image }
            cardRare={ Rare }
            cardTrunfo={ Trunfo }
          />
          <input
            key={ `Button:${Name}` }
            type="button"
            value="Excluir"
            data-testid="delete-button"
            onClick={ removeCard }
          />
        </>
      ));

    const cardsUnfiltered = cards
      .map(({ Name,
        Description,
        Attr1,
        Attr2,
        Attr3,
        Image,
        Trunfo,
        Rare,
      }) => (
        <>
          <Card
            key={ 'card: '.concat(Name) }
            cardName={ Name }
            cardDescription={ Description }
            cardAttr1={ Attr1 }
            cardAttr2={ Attr2 }
            cardAttr3={ Attr3 }
            cardImage={ Image }
            cardRare={ Rare }
            cardTrunfo={ Trunfo }
          />
          <input
            key={ 'Button: '.concat(Name) }
            type="button"
            value="Excluir"
            data-testid="delete-button"
            onClick={ removeCard }
          />
        </>
      ));

    return (
      <div>
        <label htmlFor="name-filter">
          Filtros de busca
          <input onChange={ filterName } type="text" data-testid="name-filter" />
        </label>
        { nameFilter === '' ? cardsUnfiltered : namesFiltered}
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf,
}.isRequired;

export default Deck;
