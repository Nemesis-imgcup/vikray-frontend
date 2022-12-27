import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({name, image, size, path}) => {
    return (
        <div>
            <div class="card">
                <div class="imgBx">
                    <img src={image} alt={`${name}`} />
                </div>
                <div class="contentBx">
                    <h2>{name}</h2>
                    <div class="size m-7">
                        <h3>Size :</h3>
                        {size.map((item, index) => {
                            return <span key={index}>{item}</span>
                        })}
                    </div>

                    <Link to={'/product'} class="m-7 ">
                        <div href="#">Buy Now</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard