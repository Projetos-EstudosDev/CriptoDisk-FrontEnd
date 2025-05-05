import React,{useState, useEffect, useRef} from "react"
import Usuarios from "./Usuarios"

const TelaChat = () => {
    
    const username = localStorage.getItem("username")
    const [mensagem, setMensagem] = useState([])
    const [novamsg, setNovaMsg] = useState("")
    const ws = useRef(null)

    useEffect(() => {
      ws.current = new WebSocket("ws://localhost:5144/ws")
  
      ws.current.onopen = () => console.log("ws aberto");
      ws.current.onclose = () => console.log("ws fechado");
      ws.current.onmessage = (event) => {
        const mensagemNova = event.data 
        setMensagem((prevMessages) => [...prevMessages, mensagemNova]);
      };
  
      return () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
          ws.current.close();
        }
      };
    }, []);
  
    const enviarmsg = (event) => {
        event.preventDefault()
      const msg = `${username}: ${novamsg}`
      ws.current.send(msg)
      setNovaMsg("")
    };

    return(
        <div className="TelaChat">
            <section className="Bar-name"><h3>Username da pessoal </h3></section>
            <Usuarios/>
            <section className="sect-chat">
               <form onSubmit={enviarmsg}> 
               <section className="out-chat" >
                    <output className="chat-tex">
                     <ul>
                        {mensagem.map((m,i) => (
                        <h3 key={i}>{m}</h3>
                        ))}
                    </ul>
                    </output>
                </section>
                <br/>
                <textarea className="inp-text"
                type="Text area"
                placeholder="Insira seu texto aqui..."
                value={novamsg}
                onChange={(e) => setNovaMsg(e.target.value)}
                required/>
                <button className="btb-chat" type="submit">Enviar</button>
               </form>
            </section>
        </div>
    )

}
export default TelaChat


