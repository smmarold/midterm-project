import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading"
import { Link } from 'react-router-dom';

const Products = () => {
    const {data, loading, error} = useFetch('products');
    
    if(loading){
        //return <Loading />;
        return <Loading />
    }

    if(error){
        return <p>Error Loading Products</p>
    }

    return (
        <div className="product-list">
          {data.length && 
                data.map((element) => {
               return <div key={element.id} className="box-container">
                 <img className="preview-image" src={element.image} alt={element.id} />
                 <Link to={`/${element.id}`}>{element.title}</Link>
                 </div>;
            })}
        </div>);
};

export default Products;