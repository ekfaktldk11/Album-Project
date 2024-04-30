import React, { ReactElement, useState } from 'react';
import DatePicker from "react-datepicker";
import { getAllBucketImages } from '../api/image';
import "react-datepicker/dist/react-datepicker.css";

export default function AlbumDatePicker(): ReactElement {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={(date) => onStartDateChange(date ?? startDate)} />
    );

    async function onStartDateChange(date: Date): Promise<void> {
        if (!date || startDate === date) return;
        setStartDate(date);

        await getAllBucketImages(date);
    }
}