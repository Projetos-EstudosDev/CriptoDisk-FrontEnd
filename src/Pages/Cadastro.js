import react, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Cadastros = () => {
    
    const nav = useNavigate()
    const [nome, setNome] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    const url = "http://localhost:5144/api/Auth/CreateAccount";
    const cadastro = (event) => {
        event.preventDefault()
        const cadastrodata = {
            nome,
            username,
            email,
            senha
        }
        
        axios.post(url,cadastrodata).then((result) => {
            alert("Usuario criado com sucesso")
            nav("/")
        }).catch((error)=> {
            alert(error);
        }) 
        
    }
    
    return (
        <div>
            <section className="Sect-Cadastro"> 
            <h3>Faça seu cadastro</h3>
            <form className='formCadastro' onSubmit={cadastro}>
                <input
                type='text'
                placeholder='insira seu nome...'
                value={nome}
                onChange={(e) => setNome (e.target.value)}
                required />
                <br>
                </br>
                <input
                type='text'
                placeholder='insira seu nome de usuario...'
                onChange={(e) => setUserName (e.target.value)}
                required />
                <br>
                </br>
                <input
                type='email'
                placeholder='insira seu nome de E-mail...'
                onChange={(e) => setEmail (e.target.value)}
                required />
                <br>
                </br>
                <input
                type='password'
                placeholder='insira sua senha...'
                onChange={(e) => setSenha (e.target.value)}
                required />
                <br>
                </br>
                    <button type='submit' className='btb-Login'>Criar Conta</button>
            </form>
            <br/>
            <button onClick={() => nav("/")}> Retornar ao Login</button>
            </section>
        </div>
    )
}

export default Cadastros;