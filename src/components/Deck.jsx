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
      rarityFilter,
      filterRarity,
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

    return (
      <div>
        <label htmlFor="name-filter">
          Filtros de busca
          <input
            name="nameFilter"
            onChange={ filterName }
            type="text"
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="rare-filter">
          <select name="rarityFilter" data-testid="rare-filter" onChange={ filterRarity }>
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { (nameFilter === '' && rarityFilter === 'todas') ? cards
          .map(cardFunc) : cards
          .filter(({ Name }) => Name.includes(nameFilter))
          .filter(({ Rare }) => Rare === rarityFilter)
          .map(cardFunc)}

      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf,
}.isRequired;

export default Deck;
