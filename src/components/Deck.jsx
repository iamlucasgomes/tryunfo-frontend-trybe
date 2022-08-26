import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const {
      cards,
      removeCard,
    } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          Filtros de busca
          <input type="text" data-testid="name-filter" />
        </label>
        {
          cards.map(({ Name,
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
                key={ `Button ${Name}` }
                type="button"
                value="Excluir"
                data-testid="delete-button"
                onClick={ removeCard }
              />
            </>
          ))
        }
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf,
}.isRequired;

export default Deck;
