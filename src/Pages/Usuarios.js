import react , { useEffect, useState, useRef} from "react"
import axios from "axios"

const Usuarios = () => {
    
    const [user,setUser] = useState([])
    useEffect(() => {
              const getuser = () => {
                axios.get("https://criptodiskback-gweqafd5aehbfybm.brazilsouth-01.azurewebsites.net/api/Auth/GetUsuarios")
                .then((Response) => {
                  setUser(Response.data)
                }).catch((err) => {
                  console.log(err)
                })
              }
              getuser()
            }, [])

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