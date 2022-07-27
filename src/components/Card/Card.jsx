import React from 'react'
import S from './Card.module.css'

const Card = ({dados}) => {
  const {id, name, image, oldPrice, price, description, installments} = dados
  return (
    <div className={S.container}>
        <img src={image} alt="" className={S.img}/>
        <div className={S.product_container}>
            <div className={S.describ}>
              <p className={S.product_name}>{name}</p>
              <p className={S.product_describ}>{description}</p>
            </div>
            <div className={S.price}>
              <p className={S.product_describ}>De R${oldPrice}</p>
              <strong className={S.product_describ}><big >Por R${price}</big></strong>
              <p className={S.product_describ}>ou {installments.count}x de R${installments.value}</p>   
            </div>
        </div>
        <a href="" className={S.comprar}>Comprar</a>

    </div>
  )
}

export default Card