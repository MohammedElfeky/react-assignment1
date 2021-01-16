import React, { Component } from 'react'
import style from './products.module.css'
export default class Products extends Component {
    products=[
        {
        imageUrl:'productsImages/1.jpg',
        title:'product1',
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae porro sequi eos voluptatibus sint veniam facilis dolores illum quia illo eveniet optio, a aliquid, quam quibusdam nostrum tempora at.'
    
        },
        {
        imageUrl:'productsImages/2.jpg',
        title:'product2',
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae porro sequi eos voluptatibus sint veniam facilis dolores illum quia illo eveniet optio, a aliquid, quam quibusdam nostrum tempora at.'
    
        },
        {
        imageUrl:'productsImages/3.jpg',
        title:'product3',
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae porro sequi eos voluptatibus sint veniam facilis dolores illum quia illo eveniet optio, a aliquid, quam quibusdam nostrum tempora at.'
    
        },
        {
        imageUrl:'productsImages/4.jpg',
        title:'product4',
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae porro sequi eos voluptatibus sint veniam facilis dolores illum quia illo eveniet optio, a aliquid, quam quibusdam nostrum tempora at.'
    
        },
        {
        imageUrl:'productsImages/5.jpg',
        title:'product5',
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae porro sequi eos voluptatibus sint veniam facilis dolores illum quia illo eveniet optio, a aliquid, quam quibusdam nostrum tempora at.'
    
        },
        {
        imageUrl:'productsImages/6.jpg',
        title:'product6',
        info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae porro sequi eos voluptatibus sint veniam facilis dolores illum quia illo eveniet optio, a aliquid, quam quibusdam nostrum tempora at.'
    
        }
        ]
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        {
                            this.products.map((product,index)=>{
                                return <div key={index} className='col-lg-4 mb-3'>
                                          <div className={`${style.innerProduct} p-2`}>
                                              <img className="w-100" src={product.imageUrl} alt=""/>
                                              <h2 className="my-2">{product.title}</h2>
                                              <p className="mb-2">{product.info}</p>
                                          </div>
                                       </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
