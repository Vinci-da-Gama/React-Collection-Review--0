import React from 'react';
import { Link } from 'react-router';

const Else = () => {
    return (
        <div className="page-header">
          	<h1>Else <small>else page</small></h1>
          	<Link to="/" className="btn btn-lg btn-warning" >
          		Back Home
          	</Link>
        </div>
    );
};

export default Else;
