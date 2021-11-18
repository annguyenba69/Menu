import React from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {
    listMenu: PropTypes.array
};

Content.defaultProps = {
    listMenu: []
}

function Content(props) {
    const { listMenu } = props;
    return (
        <div id="wp-content">
            <div className="container">
                <div className="row">
                    {listMenu.map((value, key) => (
                        <div className="col-6">
                            <div className="product">
                                <div className="row">
                                    <div className="col-5">
                                        <img className="img-fluid" src={value.img} alt="" />
                                    </div>
                                    <div className="col-7">
                                        <div className="title">
                                            <h5 className="text-capitalize">{value.title}</h5>
                                            <span>${value.price}</span>
                                        </div>
                                        <p>{value.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Content;