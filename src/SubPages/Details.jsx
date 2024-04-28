import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = details.find((detail) => detail.id !== idInt);
    console.log(service);
    return (
        <div>
            <img src={service.imageURL} alt="" />
            
        </div>
    );
};

export default Details;