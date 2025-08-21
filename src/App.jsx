import { useState } from 'react'
import {Provider} from "react-redux"

import './App.css'
import Body from './components/Body'
import appStore from './utils/appStore'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
      <Body/>
    </Provider>
       
    </>
  )
}

export default App
