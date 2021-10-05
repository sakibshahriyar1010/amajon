import React from 'react';

const User = (props) => {
    const {name,email,phone} = props.user
    
    
    return (
        <div style={{border: '2px solid red', padding: '30px', margin:'20px'}}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h3>{phone}</h3>
        </div>
    );
};

export default User;