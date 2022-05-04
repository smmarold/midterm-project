import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading"
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = (props) => {
    const {productId} = useParams();
    const {data, loading, error} = useFetch('products');
    const product = data[productId - 1];
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(`/product-page`);
    }
    
    if(loading){
        //return <Loading />;
        return <Loading />
    }

    if(error){
        return <p>Error Loading Products</p>
    }

    return (
        <div className="product-details-box">
            <div className="product">
                <img className="full-image" src={product.image} alt={product.id} />
                <div className="product-info">
                    <strong>{product.title}</strong>
                    <p>{product.category}</p>
                    <div className="description">
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <button className="button go-back" onClick={handleBackButtonClick}>Go Back</button>
        </div>);
};

export default ProductDetails;