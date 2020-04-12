import React from 'react';


export default ({message, user}) => {
    debugger;
    return (
        <li className="list-group-item">
            <div className= "d-flex justify-content-between">
                <h5>{user.firstName}{user.lastName}</h5>
                <small>{message.createdAt}</small>
            </div>
            <p>
                {
                    message.message
                }
            </p>
        </li>
    )
}