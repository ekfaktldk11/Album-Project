import React, { ReactElement } from 'react';
import "../styles/temp.css";

const ImgCard = ({base64ImageUrl}: { base64ImageUrl: string }): ReactElement => (
    <img className='imgCard' src={base64ImageUrl} alt="A loaded img selected on datePicker" />
);

export default ImgCard;