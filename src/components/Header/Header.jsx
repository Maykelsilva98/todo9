import React from 'react'
import S from './Header.module.css'
import Link1 from '../Link1/Link1'



const Header = () => {
  return (
    <div>
        <header className={S.header}>
            <div className={S.conteudo}>
                <div className={S.cabecalho}>
                    <p className={S.selecao}>uma seleção de produtos</p>
                    <h1 className={S.especial}>especial para você</h1>
                </div>
                <div className={S.slogan}>
                    <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                </div>
                
                <nav className={S.navbar}>
                    <Link1 texto="Conheça a linx"/>
                    <Link1 texto="Conheça a linx"/>
                    <Link1 texto="Conheça a linx"/>
                    <Link1 texto="Conheça a linx"/>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header