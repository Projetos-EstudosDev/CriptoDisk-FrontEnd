import React,{useState, useEffect, useRef} from "react";
import axios from "axios";

const TelaChat = () => {
    const [mensagem, setMensagem] = useState([]);
    const [users,setUsers] = useState([])
    const [novamsg, setNovaMsg] = useState('');
    const ws = useRef(null);
  
  
   

    useEffect(() => {
      ws.current = new WebSocket('ws://127.0.0.1:8181')
  
      ws.current.onopen = () => console.log("ws aberto");
      ws.current.onclose = () => console.log("ws fechado");
  
      ws.current.onmessage = (event) => {
        const message = event.data;
        setMensagem(prevMessages => [prevMessages, message]);
      };
  
      return () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
          ws.current.close();
        }
      };
    }, []);
  
    const enviarmsg = (event) => {
        event.preventDefault()
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.send(novamsg);
        setNovaMsg('');
      } else {
          console.error("WebSocket is not open.");
      }
    };

    return(
        <div className="TelaChat">
            <section className="Bar-name"><h3>a</h3></section>
                      <section className="TelaChat">
                        
                      </section>
            <section className="sect-chat">
               <form > 
               <section className="out-chat" >
                    <output className="chat-tex">
                     <ul>
                        {mensagem.map((msg, index) => (
                        <h3 key={index}>{msg}</h3>
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
                <button className="btb-chat" onClick={enviarmsg}>Enviar</button>
               </form>
            </section>
        </div>
    )

}
export default TelaChat