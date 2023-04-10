import React from 'react';
import PropTypes from 'prop-types';
import Attr from './Attr';
import '../style/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
    } = this.props;

    return (
      <div
        className={ `outer-bound ${cardRare === 'raro' && 'silver'}
      ${cardRare === 'muito raro' && 'gold'}` }
      >
        <div data-testid="name-card" className="middle-bound">
          <div className="inner-bound">
            <h3 data-testid="name-card">{cardName}</h3>
            <img
              className="img-bound"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
            <p data-testid="description-card">{ cardDescription }</p>
            <div className="details">
              <Attr attrName="ATK" attrId="attr1" attrValue={ cardAttr1 } />
              <Attr attrName="AGI" attrId="attr2" attrValue={ cardAttr2 } />
              <Attr attrName="INT" attrId="attr3" attrValue={ cardAttr3 } />
              <h5 data-testid="rare-card">{ cardRare }</h5>
              { cardTrunfo ? <h4 data-testid="trunfo-card">Super Trunfo</h4> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
}.isRequired;
export default Card;
