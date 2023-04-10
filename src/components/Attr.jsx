import React from 'react';
import PropTypes from 'prop-types';

function Attr(props) {
  const { attrName, attrId, attrValue } = props;
  return (
    <div className="attr">
      <h4>
        {attrName}
        ...............................
      </h4>
      <span data-testid={ `${attrId}-card` }>{attrValue}</span>
    </div>
  );
}

Attr.propTypes = {
  attrName: PropTypes.string.isRequired,
  attrId: PropTypes.string.isRequired,
  attrValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Attr;
