import React from 'react'
import styled from 'styled-components'

export default function(props) {
  const content = props.content.trim().split('>').join(String.fromCharCode(173))
  if (content.startsWith('$b ')) {
    return (
      <Line>
        <b>{content.slice(3)}</b>
      </Line>
    )
  } else if (content.startsWith('$h1 ')) {
    return (
      <Line>
        <h1>{content.slice(4)}</h1>
      </Line>
    )
  } else if (content.startsWith('$cmd ')) {
    const command = content.slice(5)
    return (
      <Line>
        <Command onClick={() => props.submitCommand(command)}>{'> ' + command}</Command>
      </Line>
    )
  } else if (content.startsWith('$bcmd ')) {
    const command = content.slice(6)
    return (
      <Line>
        <Command onClick={() => props.submitCommand(command)}>{'< ' + command}</Command>
      </Line>
    )
  } else if (content.startsWith('$lnk ')) {
    const link = content.slice(5)
    return (
      <Line>
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </Line>
    )
  } else if (content.startsWith('$img ')) {
    const image = content.slice(5)
    return (
      <a href={'images/' + image} target="_blank" rel="noopener noreferrer">
        <img src={'images/' + image} alt={image} height="250px"/>
      </a>
    )
  } else if (content.startsWith('$hr')) {
    return (
      <Line>
        <hr></hr>
      </Line>
    )
  } else if (content.startsWith('$sub ')) {
    return (
      <Submitted>
        <b>{content.slice(5)}</b>
      </Submitted>
    )
  } else if (content.startsWith('$')) {
    return <Line></Line>
  } else {
    return (
      <Line>
        {content}
      </Line>
    )
  }
}

const Line = styled.div`
  min-height: 1.2rem;
`

const Command = styled.div`
  color: var(--blue);
  font-weight: bold;
  cursor: pointer;
`

const Submitted = styled.div`
  color: var(--yellow);
`
