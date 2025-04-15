import react from 'react';

const Login = () => {


    return(
        <div>
            <section className="Sect-Login">
                <h3>Acesse sua conta</h3>
                <form className='FormLogin'>
                    
                    <input
                    type='text'
                    placeholder='Insira seu username'
                    required />
                    <br/>
                    <br/>
                    <input
                    type='password'
                    placeholder='Insira sua password'
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