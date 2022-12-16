import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Container from './components/Container'
import './App.css'

function App () {
  const [totalPercentage, setTotalPercentage] = useState<number>(0)
  return (
    <Root>
      <Container width={100} height={100} percentage={80} top="calc(25% - 50px)" left="calc(25% - 50px)" label="칭찬"
        onClick={() => {
          setTotalPercentage((prev) => {
            if (prev < 100) {
              return prev + 20
            } else {
              return prev
            }
          })
        }}
      />
      <Container width={100} height={100} percentage={80} top="calc(75% - 50px)" left="calc(75% - 50px)" label="격려"
        onClick={() => {
          setTotalPercentage((prev) => {
            if (prev < 100) {
              return prev + 20
            } else {
              return prev
            }
          })
        }}/>
      <Container width={200} height={200} percentage={totalPercentage} top="calc(50% - 100px)" left="calc(50% - 100px)"
        label={`${totalPercentage}프로`}
        onClick={() => {
        }}
      />
    </Root>
  )
}

const Root = styled.div(() => css`
  width: 100vw;
  height: 100vh; 

  position: relative;
`)

export default App
