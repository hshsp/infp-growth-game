import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  width: number
  height: number
  percentage: number
  top: string
  left: string
  label: string
  onClick: () => void
}
const Container = (props: Props): any => {
  return (
    <Root top={props.top} left={props.left} size={props.width * 0.2}>
        <ContentsContainer width={props.width} height={props.height} onClick={() => { props.onClick() }}>
            <Contents percentage={props.percentage}/>
        </ContentsContainer>
        <span>{props.label}</span>
    </Root>
  )
}

const Root = styled.div((props: { top: string, left: string, size: number }) => css`
  position: absolute;
  top: ${props.top};
  left: ${props.left};

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 10px;
    font-size: ${props.size}px;
    font-family: "establishRetrosansOTF";
  }
`)

const ContentsContainer = styled.div((props: { width: number, height: number }) => css`
  width: ${props.width}px;
  height: ${props.height}px; 
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`)

const Contents = styled.div((props: { percentage: number }) => css`
  height: ${props.percentage}%;
  background: var(--blue);
`)

export default Container
