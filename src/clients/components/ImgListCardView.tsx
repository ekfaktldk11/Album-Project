import React, { ReactElement, useState, useEffect } from 'react';
import { getAllBucketImages } from '../api/image';
import ImgCard from './ImgCard';

const ImageListContainer = ({ albumDate }: { albumDate: Date }): ReactElement => {
    const [base64ImageUrls, setBase64ImageUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await getAllBucketImages(albumDate);
            const json = await res.json();
            setBase64ImageUrls(json.images);
            setLoading(false); // Set loading to false after data is fetched
        };
        try {
            fetchData();
        } catch (e) {
            setError(true);
        }
    }, [albumDate]);

    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error</div>;
    } else if (base64ImageUrls.length > 0) {
        return (
            <div>
                {base64ImageUrls.map((url) => (
                    <ImgCard base64ImageUrl={url} />
                ))}
            </div>
        );
    } else {
        return <div>No images found</div>;
    }
};

export default ImageListContainer;
