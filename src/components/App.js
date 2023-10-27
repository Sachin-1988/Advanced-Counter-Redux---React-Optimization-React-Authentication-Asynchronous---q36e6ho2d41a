import React from 'react';
import Counter from './Counter'
import Login from './Login'
import {useSelector} from 'react-redux'
 

function App() {
  const islogged = useSelector(state => state.islogged);
  return (
    <div className="App">
    <Login />
    {islogged ? <Counter />: <h3>Please Sign In</h3>}
    </div>
  );
}

export default App;
