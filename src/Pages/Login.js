import react, {useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';


const Login = () => {
    
    const nav = useNavigate();
    const [username, setUserName] = useState();
    const [senha, setSenha] = useState();
    
    const URL = "https://localhost:7267/api/Auth/Login"

    const login = (event) => {
        event.preventDefault()
            const logindata = {
                username,
                senha
            }

            axios.post(URL,logindata).then((result) => {
                alert(result.data)
               
                nav("/Chat")
            }).catch((error)=> {
                alert(error)
            }) 
    }
   
    return(
        <div>
            <section className="Sect-Login">
                <h3>Acesse sua conta</h3>
                <form className='FormLogin' onSubmit={login}>
                    
                <input
                    type='text'
                    placeholder='Insira seu username'
                    value={username}
                    onChange={(e) => setUserName (e.target.value)}
                    required />
                    <br/>
                    <br/>
                    <input
                    type='password'
                    placeholder='Insira sua password'
                    value={senha}
                    onChange={(e) => setSenha (e.target.value)}
                    required />
                    <br/>
                    <br/>
                    <button type='submit' className='btb-Login'>Logar</button>
                </form>
                <br/>
                <Link to="/Cadastro">
                    <h5>Crie sua conta</h5>
                </Link>
            </section>
        </div>
    )
    
}

export default Login;