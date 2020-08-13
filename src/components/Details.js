import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'


// pull in the lib
// OUTSIDE the Details function
// create a StyledDetails
// supplanat the top-level div with it
// const StyledDetails = styled.div`
//   background-color: ${props => props.color || 'initial'};
//   font-family: monospace;
//   button {
//     background-color: red;
//   }
// `

// const StyledDetails = styled.div`
//   border: 1px solid #d2d2d2;
//   box-shadow: 0px 1px 6px -2px #807f7f;
//   border-radius: 8px;
//   margin-top: 16px;
//   padding: 16px;
//   background-color: purple;
//   color: red;
//   button {
//     background-color: yellow;
//     transition: all 0.25s ease-in-out;
//     &:hover: {
//       transition: all 0.25s ease-in-out;
//       transform: scale(2);
//     }
//   }
// `

// const StyledDetails = styled.div`
// border: 1px solid #d2d2d2;
// box-shadow: 0px 1px 6px -2px #807f7f;
// border-radius: 8px;
// margin-top: 16px;
// padding: 16px;
// color: teal;
// background-color: pink;
// border: 12px orange dotted;
// font-size: 2rem;
// font-family: sans-serif;
// :hover{
//   color: purple;
// }
// button{
//   font-size: 48px;
//   width: 50%;
//   margin: 0% 25%;
//   color: orange;
//   background-color: teal;
//   :hover{
//     color: gold;
//   }
// }
// `

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(10) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  h2 {
    font-size: 3rem;
    background: ${ () => {
      let hex = () => Math.floor(Math.random()*255).toString(16);
      console.log(hex());
      return '#'+hex()+hex()+hex()
    }};
  }
`

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [friendId])

  return (
    <StyledDetails color='yellow' className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}
