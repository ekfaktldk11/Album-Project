// return img element that get image blob file from props

import React, { ReactElement } from 'react';

export default function ImgContainer(base64ImageUrl: string): ReactElement {
    return <img src={base64ImageUrl} alt="A loaded img selected on datePicker" />;
}
