import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading"
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = (props) => {
    const {productId} = useParams();
    const {data, loading, error} = useFetch(`products/${productId}`);
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
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
                <img className="full-image" src={data.image} alt={data.id} />
                <div className="product-info">
                    <strong>{data.title}</strong>
                    <p>{data.category}</p>
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <button className="button go-back" onClick={handleBackButtonClick}>Go Back</button>
        </div>);
};

export default ProductDetails;