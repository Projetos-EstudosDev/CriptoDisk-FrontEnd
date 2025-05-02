import React,{useState, useEffect, useRef} from "react"
import axios from "axios"
import {DadosLogin} from "./Login"

const TelaChat = () => {
    const [mensagem, setMensagem] = useState([])
    const [getUser, setGetUsers] = useState([])
    const [userRoom, SetUserRomm] = useState()
    const [novamsg, setNovaMsg] = useState([])
    const ws = useRef(null)
  
    useEffect(() => {
          const getuser = () => {
            axios.get("http://localhost:5144/api/Auth/GetUsuarios")
            .then((Response) => {
              setGetUsers(Response.data)
            }).catch((err) => {
              console.log(err)
            })
          }
          getuser()
        }, [])

   

    useEffect(() => {
      ws.current = new WebSocket("ws://localhost:5144/ws")
  
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
      } 
      
    };

    const room = (event) => {
      event.preventDefault()
      ws.current.onopen = () => console.log("websocket aberto")
      ws.current.onmessage = (resposta) => {
        const msg = resposta.data
        setMensagem(mensage => [mensage,msg])
      }
    }

    return(
        <div className="TelaChat">
            <section className="Bar-name"><h3>Username da pessoal </h3></section>
                      <ul className="listuser">
                        {getUser.map((username) => (
                          <p onClick={room}>{username.username}</p>
                        ))}
                      </ul>
            <section className="sect-chat">
               <form > 
               <section className="out-chat" >
                    <output className="chat-tex">
                     <ul>
                        {mensagem.map((msg) => (
                        <h3 >{msg}</h3>
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