import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';
import Goat from '../Goat/Goat';
import './GoatCorral.scss';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      <Goat key={goat.id} goat={ goat } />
    ));

    return (
      <div className="GoatCorral container">
        <div className="card-columns">
        { makeGoats }
        </div>
      </div>
    );
  }
}

export default GoatCorral;
