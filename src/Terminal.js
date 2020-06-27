import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Line from './Line.js'
import commands from './commands.js'

// constants
const commandPrompt = 'user@felixwu.me:~$ '
const bootSequence = [
  'Loading...',
]
const maxHistory = 100
const progressSpeed = 2

export default function() {
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  // input from the input box
  const [command, setCommand] = useState('')
  
  // the line that is currently being printed
  const [lineProgress, setLineProgress] = useState(1)

  // the character that is currently being printed
  const [charProgress, setCharProgress] = useState(0)

  // the content of the terminal
  const [content, setContent] = useState([])

  const [height, setHeight] = useState('30vh') // --> 800px
  const [width, setWidth] = useState('400px')  // --> 90vw

  // every time the component finishes loading
  useEffect(() => {
    // call progress, but every now and again use setTimeout so the maximum call stack
    // doesn't get reached
    charProgress % 50 === 0 ? setTimeout(progress, 0) : progress()
  })

  // only the first time the component loads
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => startup(), [])

  // HANDLERS //////////////////////////////////////////////////////////////////////////////////////

  const handleTyping = (e) => {
    const value = e.target.value
    if (value.length < commandPrompt.length) {
      inputRef.current.value = commandPrompt
    }
    setCommand(value)
  }

  // clear input and make response
  const handleSubmit = (e) => {
    inputRef.current.value = commandPrompt
    e.preventDefault()

    const commandTrim = command.slice(commandPrompt.length)
    submitCommand(commandTrim)
  }

  // focus the input box every time the terminal is clicked
  const handleClick = (e) => {
    focus()
  }

  // FUNCTIONS /////////////////////////////////////////////////////////////////////////////////////

  // start up animation / text
  const startup = () => {
    addLines(bootSequence)
    setTimeout(() => {
      clear()
      setWidth('900px')
      setHeight('90vh')
    }, 1000);
    setTimeout(() => {
      addLines(commands.home.split('\n'))
      inputRef.current.value = commandPrompt
    }, 2000);

  }

  // enter a command to be processed
  const submitCommand = (command) => {
    // help command
    if (command === 'help' || command === '?') {
      addLines([
        '$sub ' + commandPrompt + command,
        '',
        'Available commands:',
        ...Object.keys(commands).sort().map(c => `$cmd ${c}`),
        '$cmd help',
        '$cmd ?',
        '$cmd clear',
        '$cmd reboot',
        ''
      ])
      return
    }

    // clear command
    if (command === 'clear') {
      clear()
      return
    }

    // reboot command
    if (command === 'reboot') {
      inputRef.current.value = ''
      clear()
      startup()
      return
    }

    // normal command
    if (commands[command]) {
      const response = commands[command].split('\n')
      addLines([
        '$sub ' + commandPrompt + command,
        ...response
      ])

    // unrecognised command
    } else {
      addLines([
        '$sub ' + commandPrompt + command,
        `"${command}" is an unrecognised command. Type "help" or "?" for a list of commands.`
      ])
    }

  }

  // add lines to the terminal
  const addLines = (lines) => {
    setContent(content => content.concat(lines))
  }

  // clear the terminal from all lines
  const clear = () => {
    setContent([])
    setLineProgress(1)
    setCharProgress(0)
  }

  // increments charProgress or lineProgress accordingly
  const progress = () => {
    focus()
    try {
      if (charProgress < content[lineProgress - 1].length) {
        setCharProgress(charProgress + progressSpeed)
        return
      }
      if (lineProgress < content.length) {
        if (content.length > maxHistory) {
          setContent(content.slice(1))
        } else {
          setLineProgress(lineProgress + 1)
        }
        setCharProgress(0)
      }
    } catch (e) {}
  }

  // give focus to the input box
  const focus = () => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    if (typeof window.orientation === 'undefined') {
      inputRef.current.focus()
    }
  }

  // COMPONENT /////////////////////////////////////////////////////////////////////////////////////

  return (
    <Terminal ref={terminalRef} onClick={handleClick} id="terminal"style={{width, height}} >
      {
        // for every line from 0 to lineProgress
        content.slice(0, lineProgress).map((line, index) => {
          // if the line isnt the last line, use the whole text from the line, otherwise print only 
          // chars 0 to charProgress
          const content = index === lineProgress - 1 ? line.slice(0, charProgress) : line
          return <Line content={content} submitCommand={submitCommand} key={index}></Line>
        })
      }
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input ref={inputRef} onChange={handleTyping} spellCheck="false"/>
      </form>
    </Terminal>
  );
}

// STYLES //////////////////////////////////////////////////////////////////////////////////////////

const Input = styled.input`
  background-color: transparent;
  color: var(--yellow);
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  width: 100%;
  text-transform: lowercase;
`

const Terminal = styled.div`
  border-top: solid var(--black-lighter) 25px;
  border-radius: var(--border-radius);
  grid-area: mid;
  max-width: 100vw;
  max-height: 100vh;
  padding: 10px;
  padding-top: 0;
  overflow: auto;
  background-color: var(--black);
  color: var(--white);
  box-shadow: 0 0 40px var(--black);
  transition: 1s;
`
