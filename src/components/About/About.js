import React, { useEffect, useState } from 'react';
import User from '../user/User';
import './About.css'

const About = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setData(data))
    },[])
    return (
        <div className='container'>
            {
                data.map(u => <User key={u.key} user={u}></User>)
            }
        </div>
    );
};

export default About;