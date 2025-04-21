import React from "react";

const TelaChat = () => {


    return(
        <div className="TelaChat">
            
            <section className="Bar-name">Nome da pessoa</section>
            <section className="sect-chat">
               <form > 
                <section className="out-chat" >
                    <output className="chat-tex">
                        
                        <h3>Ola</h3>
                    </output>
                </section>
                <br/>
                <textarea className="inp-text"
                type="Text area"
                placeholder="Insira seu texto aqui..."
                required/>
                <button className="btb-chat">Enviar</button>
               </form>
            </section>
        </div>
    )
}
export default TelaChat