import react from 'react'
import { useState } from 'react'


function Lol11() {

  let arr = ['ali', 'ahmad', 'abdullah']
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(true);
  const updatecount = () => {
    setCount(count + 1);
  }
  const hideCount = () => {
    setHide(!hide);
  }
  return (
    <>

      {hide && <div>{count}</div>}
      <button onClick={updatecount}>Click to update</button>
      <button onClick={hideCount}>
        {hide ? 'click to hide counter' : 'click to show counter'}
      </button>
      <ul>
        {arr.map((username) => {
          <li>{username}</li>
        })}
      </ul>

    </>
  )
}

export default Lol11
