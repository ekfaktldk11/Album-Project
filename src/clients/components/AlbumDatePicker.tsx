import React, { ReactElement, useState } from 'react';
import DatePicker from 'react-datepicker';
// import ImgContainer from './imgContainer';
import { getAllBucketImages } from '../api/image';
import 'react-datepicker/dist/react-datepicker.css';

const AlbumDatePicker = (): ReactElement => {
    const [startDate, setStartDate] = useState(new Date());

    const onStartDateChange = async (date: Date): Promise<void> => {
        if (!date || startDate === date) return;
        setStartDate(date);

        const json = await getAllBucketImages(date);
        // Refresh the function that creates ImgContainer
    };

    return <DatePicker selected={startDate} onChange={(date) => onStartDateChange(date ?? startDate)} />;
};

export default AlbumDatePicker;
