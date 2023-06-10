import React from 'react'
import { useState } from 'react'

function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');

    const handleSubmit = () => {

    };

    return (
        <div className='add d-row'>
            <h2>Create User</h2>
            {/* adding routes */}

            <div className="content">
                <label htmlFor="username">Username: </label>
                <br />
                <input
                    type="text"
                    placeholder='Username'
                    id="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input
                    type="password"
                    placeholder='Password'
                    id="password"
                    value={password}
                    onChange={ev => setUserPassword(ev.target.value)}
                />
                <br />
                <br />
                <button className="btn" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>

    );
}
export default CreateUser;
