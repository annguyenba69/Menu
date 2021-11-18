import React from 'react';
import PropTypes from 'prop-types';

Categories.propTypes = {
    allCategories: PropTypes.array,
    filterCategories : PropTypes.func
};

Categories.defaultProps = {
    allCategories: [],
    filterCategories : null
}

function Categories(props) {
    const { allCategories } = props;
    return (
        <div id="header">
            <div className="jumbotron text-center">
                <h1 className="display-3">Our Menu</h1>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            {allCategories.map((value, key) => (
                                <li className="nav-item">
                                    <a className="nav-link text-capitalize" href="#" onClick={(category)=>props.filterCategories(value)}>{value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Categories;