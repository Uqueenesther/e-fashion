import {useContext} from 'react';
import {ProductsContext} from '../../context/products.context';
import ProductCard from '../../component/products-card/product-card';
import './Shop.scss'

const Shop = () =>{
    const {products } = useContext(ProductsContext)
    return (
    <div className='products-container'>
        {
            products.map((product) =>(       
            <ProductCard key={product.id} product={product} />

            ))
        }
    </div>
    
    )
}

export default Shop