/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-container">
        <form onSubmit={ onSaveButtonClick }>
          <div className="form-input name">
            <label htmlFor="cardName">
              <h3>Nome</h3>
              <input
                type="text"
                name="cardName"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-input description">
            <label htmlFor="cardDescription">
              <h3>Descrição</h3>
              <textarea
                name="cardDescription"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-input attr1">
            <label htmlFor="cardAttr1">
              <h3>Força:</h3>
              <input
                type="number"
                name="cardAttr1"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-input attr2">
            <label htmlFor="cardAttr2">
              <h3>Agilidade:</h3>
              <input
                type="number"
                name="cardAttr2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-input attr3">
            <label htmlFor="cardAttr3">
              <h3>Inteligência:</h3>
              <input
                type="number"
                name="cardAttr3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-input image">
            <label htmlFor="cardImage">
              <h3>Imagem:</h3>
              <input
                type="text"
                name="cardImage"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-select rare">
            <label htmlFor="cardRare">
              <h3>Tipo:</h3>
              <select
                name="cardRare"
                data-testid="rare-input"
                value={ cardRare }
                onChange={ onInputChange }
              >
                <option value="normal">normal</option>
                <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
              </select>
              <br />
            </label>
          </div>
          {
            hasTrunfo ? (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            ) : (
              <div className="form-check trunfo">
                <label htmlFor="cardTrunfo">
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    data-testid="trunfo-input"
                  />
                  <h3>Super Trunfo</h3>
                </label>
              </div>
            )
          }
          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
