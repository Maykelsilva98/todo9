import React, {useState, useEffect} from 'react'
import S from './Index.module.css'
import Link1 from '../../components/Link1/Link1'
import Form from '../../components/Form/Form'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'

const Index = () => {
    const [valorReq, setReq] = useState([])

    useEffect(()=>{
       handleReq()
    }, [])

    async function handleReq(){
        const response = await fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        const json = await response.json()
        setReq(json.products)
    }
    return (
    <div className="App">
        <Header/>
        <section className={S.section1}>
            <div className={S.container1}>
                <div className={S.texto}>
                    <h2>Ajude o aloritmo ser o mais certeiro</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur ad
                        ipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
                        rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum
                        arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut
                        tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend <br/>
                        . Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. 
                        Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis 
                        augue est vel metus.</p>
                </div>
                <Form/>
            </div>
        </section> 
        <div className={S.divisao}>          
            <hr className={S.linha}/>
            <p> Sua seleção especial </p> 
            <hr className={S.linha}/>
        </div>

        <section className={S.produtos}>
            <div className={S.cards}>
                {valorReq.map((produto)=>{
                    return (<Card dados={produto}/>)
                })}
            </div>
        </section>

        <button type=""></button>

    </div>
    )
}

export default Index