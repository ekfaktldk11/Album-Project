import React, { ReactElement } from 'react';

const ImgCard = ({base64ImageUrl}: { base64ImageUrl: string }): ReactElement => (
    <img src={base64ImageUrl} alt="A loaded img selected on datePicker" />
);

export default ImgCard;