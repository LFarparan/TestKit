import React, { useState, useRef } from 'react'

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userWarn, setUserWarn] = useState('')
    const [passWarn, setPassWarn] = useState('')

    function checkUsername(e) {
        let value = e.target.value
        setUsername(value)
        if (value.length < 5 || value.length > 20) {
            setUserWarn('* username must be 5 - 20 chars')
        } else setUserWarn('')
    }

    function checkPassword(e) {
        let value = e.target.value
        setPassword(value)
        if (value.length < 5 || value.length > 20) {
            setPassWarn('* password must be 5 - 20 chars')
        } else setPassWarn('')
    }

    function handleSignup(e) {
        e.preventDefault()
        if (!userWarn && !passWarn) console.log('congrats')
    }

    return (
        <div>
            <h1> TestKit </h1>
            <p> Create an Account </p>
            <form>
                <label htmlFor="username"> UserName: </label>
                <input type="text" id='username' onChange={checkUsername} />
                <span> {userWarn} </span>
                <br />

                <label htmlFor="password"> Password: </label>
                <input type="password" id='password' onChange={checkPassword} />
                <span> {passWarn} </span>
                <br />

                <button type='submit' onClick={(e) => handleSignup(e)}> SIGN UP </button>
            </form>
        </div>
    )
}

export default App