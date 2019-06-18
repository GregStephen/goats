import React from 'react';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      // <Goat goat={ goat } />
      <div id={goat.id} className="col-4">
        <div className="card">
         <h2>{goat.name}</h2>
         <img className="goat-image" src={goat.imageUrl} alt=''></img>
         <div className="card-body">
          <p>{goat.disposition}</p>
         </div>
        </div>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
        { makeGoats }
        </div>
      </div>
    );
  }
}

export default GoatCorral;
