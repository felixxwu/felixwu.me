import React from 'react'
import styled from 'styled-components'
import Terminal from './Terminal.js'

export default function() {
  
  return (
    <App>
      <Terminal></Terminal>
    </App>
  );
}

const App = styled.div`
  display: grid;
  grid-template-areas: ". . ." ". mid ." ". . .";
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  width: 100vw;
  height: 100vh;
  font-family: consolas;
  font-size: 17px;
  overflow: hidden;
`
