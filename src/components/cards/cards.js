import React from 'react';

const Card = ({items}) => {
    console.log(items)
        return (
            <div>
                {items.map((item, index) => (
                    <div className="card mb-3" style={{"maxWidth": "540px"}} key={index}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={item.avatar_url} className="card-img" alt={item.login}/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.login}</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

export default Card;