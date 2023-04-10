/* eslint-disable react/jsx-max-depth */
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
      <div>
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
          removeCard={ removeCard }
        />
        <button
          key={ 'Button: '.concat(Name) }
          type="button"
          value="Excluir"
          data-testid="delete-button"
          onClick={ removeCard }
        >
          Excluir
        </button>
      </div>
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
      <section className="saved-cards">
        <section className="card-filter">
          <div className="filter-container">
            <div className="form-input typedName">
              <label htmlFor="name-filter">
                <h2>Todas as cartas</h2>
                <h3>Filtros de busca</h3>
                <input
                  name="nameFilter"
                  id="typedName"
                  onChange={ filterName }
                  type="text"
                  data-testid="name-filter"
                  disabled={ ItsDeactivated }
                />
              </label>
            </div>
            <div className="form-select selectedRare">
              <label htmlFor="rare-filter">
                <select
                  name="rarityFilter"
                  id="selectedRare"
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
            </div>
            <div className="form-check checkedTrunfo">
              <label htmlFor="trunfo-filter">
                <input
                  id="checkedTrunfo"
                  name="Super Trunfo"
                  type="checkbox"
                  data-testid="trunfo-filter"
                  onClick={ filterTrunfo }
                />
                Super Trunfo
              </label>
            </div>
          </div>
        </section>
        <section className="card-list">
          { cardList }
        </section>
      </section>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf,
}.isRequired;

export default Deck;
