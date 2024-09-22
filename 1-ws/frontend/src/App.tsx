import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message,setMessage] = useState<string[]> ([]);
  const [inputValue,setInputValue] = useState<string>("");

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setMessage(prevMessages => [...prevMessages, message.data]);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <>
      hi there
      <input type="text" onChange={(e)=>{
        setInputValue(e.target.value);
      }}/>
      <button onClick={()=>{
        if(socket){
          socket.send(`Client says: ${inputValue}`);
        }
      }}>Send message</button>
      {message.map((msg, index) => ( <div key={index}>{msg}</div>))}
    </>
  )
}

export default App