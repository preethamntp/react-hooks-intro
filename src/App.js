import React from 'react'
// import HooksApp from './Hooks-News/HooksApp'
import AsyncAwaitReqs from './Hooks-News/AsyncAwaitReqs/AsyncAwaitReqs'
import HooksToDos from './CRUD/HooksToDos'
import { UserContext } from './index'



export default function App() {
    return (
        <div>
           <UserContext>
               {value => <div>
                Hello, {value}
            </div>
            }
           </UserContext>
        </div>
    )
}
