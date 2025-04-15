import react, {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUserName] = useState();
    const [senha, setSenha] = useState();

    const logindata = [
        username,
        senha
    ]

    // const url = axios.post("",logindata)

    return(
        <div>
            <section className="Sect-Login">
                <h3>Acesse sua conta</h3>
                <form className='FormLogin'>
                    
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
                <h5 >Criar sua conta</h5>
            </section>
        </div>
    )
}
export default Login;