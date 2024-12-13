import './MyForm.css'

import { useState } from 'react'

//recebendo valores 

const Myform = ({user}) => {

    // controller inputs

    // 3 - geranciamento de dados 
    const [name, setName] = useState(user? user.name : "");
    const [email, setEmail] = useState(user? user.email:"");
    const [bio, setBio] = useState(user? user.bio:"");
    const [role, setRole] = useState(user? user.role:"");


    //primeira forma de fazer uma alteração de valor de variável 
    const handleName = (e) => {
        setName(e.target.value);
        //console.log(name);
    }

    // segunda maneira de alterar o valor da variavel 
    //console.log(email);

    //função de envio do formulário 
    const handleSummit = (event) => {

        // não deixar dar o reload na tela 
        event.preventDefault();

        console.log("enviando formulário");
        console.log(name, email, bio, role);

        //limpando formulario 
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }


    return (
        <div>
            {/* 1 0 criacao form */}
            <form onSubmit={handleSummit}>

                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                        name="name" 
                        id="name"
                        placeholder="Digite o seu nome" 
                        onChange={handleName} 
                        value={name}/>
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" 
                        name="email" 
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" 
                        placeholder='Descrição do usuário' 
                        onChange={(event) => setBio(event.target.value)} 
                        value={bio}>
                    </textarea>
                </label>
                
                <label>
                    <span>Função no sistema</span>
                    <select name="role" 
                        onChange={ (e) => setRole(e.target.value)}
                        value={role}
                        >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </label>


                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default Myform;