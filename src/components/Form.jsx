import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea name="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          attr1
          <input type="number" name="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          attr2
          <input type="number" name="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          attr3
          <input type="number" name="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" name="image" id="" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <select name="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
          Super Trunfo
        </label>
        <input type="button" value="Salvar" data-testid="save-button" />
      </form>
    );
  }
}

export default Form;
