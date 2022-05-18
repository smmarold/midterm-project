import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading"
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import { ThemeContext } from './context/ThemeContext';

const Products = () => {
    const {data, loading, error} = useFetch('products');
    const {theme} = useContext(ThemeContext);
    
    if(loading){
        //return <Loading />;
        return <Loading />
    }

    if(error){
        return <p>Error Loading Products</p>
    }

    return (
        <div className="product-list" style={({backgroundColor: theme.background, color: theme.forground})} >
          {data.length && 
                data.map((element) => {
               return <div key={element.id} className="box-container">
                 <img className="preview-image" src={element.image} alt={element.id} />
                 <Link to={`/${element.id}`} style={({color: theme.forground})}>{element.title}</Link>
                 </div>;
            })}
        </div>);
};

export default Products;