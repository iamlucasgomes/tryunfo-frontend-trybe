import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  removeCard = ({ target }) => {
    const { name } = target;
    console.log(this.state[name]);
  };

  render() {
    const {
      cards,
    } = this.props;

    return (
      <div>
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
                type="button"
                value="Excluir"
                data-testid="delete-button"
                onClick={ this.removeCard }
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