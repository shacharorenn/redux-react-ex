import React from 'react';
import SingleMessage from './SingleMessage';

export default ({messages,user}) => {
    debugger;
    return (
        <div className="border border-primary pt-4 pt-4 mt-4 mt-4">
            {
                user ? 
                (
                <ul className="list-group">
                    {
                        Object.values(messages)
                            .filter((singleMessage) => singleMessage.userId ===user.id)
                            .map((singleMessage) => (
                                    <SingleMessage 
                                        message={singleMessage} 
                                        user={user}
                                        key={singleMessage.id}
                                    />
                                )   
                            )
                    }
                </ul>
                ) : (
                    <h1>Please register first</h1>
                )
            }
        </div>
    )
}