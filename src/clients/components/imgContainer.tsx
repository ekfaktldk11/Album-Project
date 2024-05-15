import React, { ReactElement } from 'react';

const ImgContainer = (base64ImageUrl: string): ReactElement => (
    <img src={base64ImageUrl} alt="A loaded img selected on datePicker" />
);