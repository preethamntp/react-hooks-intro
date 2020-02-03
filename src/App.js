import React, { useContext } from 'react'
// import HooksApp from './Hooks-News/HooksApp'
// import AsyncAwaitReqs from './Hooks-News/AsyncAwaitReqs/AsyncAwaitReqs'
// import HooksToDos from './CRUD/HooksToDos'
import { UserContext } from './index'



export default function App() {
    const value = useContext(UserContext);
    return (
        <div>
            Hello, {value}
        </div>
    )
}
