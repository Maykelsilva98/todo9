import React from 'react'
import S from './Form.module.css'

const Form = () => {
  return (
    <div className={S.container}>
        <form className={S.form}>
            <div className={S.input_container}>
                <label for="name" className={S.label}>Seu nome:</label>
                <input type="text" name="name" value="" className={S.input}/>
            </div>
            <div className={S.input_container}>
                <label for="email"  className={S.label} >E-mail:</label>
                <input type="text" name="email" value=""className={S.input}/>        
            </div>
            <div className={S.input_container}>    
                <label for="CPF" className={S.label}>CPF:</label>
                <input type="text" name="CPF" value="" className={S.input}/>
            </div>
            <div className={S.radio_input}>
                <div>
                    <input type="radio" id="mas" name="sexo" value="mas"/>
                    <label for="codificar" className={S.label}>Masculino</label>
                </div>
                <div>
                    <input type="radio" id="fem" name="sexo" value="fem"/>
                    <label for="feminino" className={S.label}>Feminino</label>
                </div>
            </div>
        </form>
        <a href="" className={S.send}>Enviar</a>
    </div>
  )
}

export default Form