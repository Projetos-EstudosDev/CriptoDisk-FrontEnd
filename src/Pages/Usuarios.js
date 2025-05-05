import react , { useEffect, useState, useRef} from "react"
import axios from "axios"

const Usuarios = () => {
    
    const [user,setUser] = useState([])
    const [usuario, setUsuario] = useState("")
    const [mensagem, setMensagem] = useState([])
    const [novamsg, setNovaMsg] = useState("")
    const username = localStorage.getItem("username")
    
    const ws = useRef(null)
    useEffect(() => {
              const getuser = () => {
                axios.get("http://localhost:5144/api/Auth/GetUsuarios")
                .then((Response) => {
                  setUser(Response.data)
                }).catch((err) => {
                  console.log(err)
                })
              }
              getuser()
            }, [])
            
useEffect(() => {
    const click = () => {
        
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
    }
    
        const enviarmsg = (event) => {
            event.preventDefault()
          const msg = `${username}: ${novamsg}`
          ws.current.send(msg)
          setNovaMsg("")
        };
}, []);


    return(
        <div>
            <section>
                <nav className="nav-getuser">
                    <ul>
                        {user.map((u,i) => (
                            <li key={i} >{u.username}</li>
                        ))}
                    </ul>
                </nav>
            </section>
        </div>
    )
}
export default Usuarios