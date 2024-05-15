import React, { useState } from 'react';
import ImageListCardView from './ImgListCardView';
import AlbumDatePicker from './AlbumDatePicker';

const AlbumContentContainer: React.FC = () => {
    const [albumDate, setAlbumDate] = useState(new Date());

    const handleAlbumDateChange = (date: Date): void => {
        if (!date || albumDate === date) return;
        setAlbumDate(date);
    };

    return (
        <div>
            <AlbumDatePicker onAlbumDateChange={handleAlbumDateChange} albumDate={albumDate} />
            <ImageListCardView albumDate={albumDate} />
        </div>
    );
};

export default AlbumContentContainer;
