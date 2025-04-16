import react, {useState} from 'react';

const Cadastros = () => {
    const [nome, setNome] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const cadastrodata = [
        nome,
        username,
        email,
        senha

    ]
    
    return (
        <div>
            <section className="Sect-Cadastro"> 
            <h3>Faça seu cadastro</h3>
            <form className='formCadastro'>

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
            </section>
        </div>
    )
}