import React, { ReactElement } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AlbumDatePicker = ({ onAlbumDateChange, albumDate }: { onAlbumDateChange: (date: Date) => void; albumDate: Date }): ReactElement => {
    const onDatePickerChange = (date: Date): void => {
        onAlbumDateChange(date);
    };

    return <DatePicker selected={albumDate} onChange={onDatePickerChange} />;
};

export default AlbumDatePicker;
