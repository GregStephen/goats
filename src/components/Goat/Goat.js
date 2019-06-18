import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div className="Goat">
        <div className="card">
         <img className="goat-image img-fluid" src={goat.imageUrl} alt=''></img>
         <div className="card-body">
          <h2 className="card-title">{goat.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Color: {goat.color}</li>
            <li className="list-group-item">Disposition: {goat.disposition}</li>
            <li className="list-group-item"> Fullness: {goat.fullness}</li>
            <li className="list-group-item">Favorite Pose: {goat.favPose}</li>
          </ul>
         </div>
        </div>
      </div>
    );
  }
}

export default Goat;
