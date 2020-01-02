import React from 'react';
import PropTypes from 'prop-types';

const Spin = ({ handleStart }) => (
  <button
    className="drum__button"
    type="button"
    onClick={handleStart}
  >
    Spin
  </button>
);

Spin.propTypes = { handleStart: PropTypes.func.isRequired };

export default Spin;
