import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    let ItsDeactivated = false;
    const {
      cards,
      removeCard,
      filterName,
      nameFilter,
      rarityFilter,
      filterRarity,
      trunfoFilter,
      filterTrunfo,
    } = this.props;

    const cardFunc = ({ Name,
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
    );

    let filteredCards = cards;

    if (trunfoFilter === true) {
      ItsDeactivated = true;
      filteredCards = filteredCards
        .filter(({ Trunfo }) => Trunfo === true);
    }

    if (nameFilter !== '') {
      filteredCards = filteredCards.filter(({ Name }) => Name
        .toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (rarityFilter !== 'todas') {
      filteredCards = filteredCards.filter(({ Rare }) => Rare === rarityFilter);
    }

    const cardList = filteredCards.map(cardFunc);

    return (
      <div>
        <label htmlFor="name-filter">
          Filtros de busca
          <input
            name="nameFilter"
            onChange={ filterName }
            type="text"
            data-testid="name-filter"
            disabled={ ItsDeactivated }
          />
        </label>
        <label htmlFor="rare-filter">
          <select
            name="rarityFilter"
            data-testid="rare-filter"
            onChange={ filterRarity }
            disabled={ ItsDeactivated }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          <input
            name="Super Trunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            onClick={ filterTrunfo }
          />
          Super Trunfo
        </label>
        { cardList }

      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf,
}.isRequired;

export default Deck;
