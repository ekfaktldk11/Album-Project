import React, { ReactElement, useState } from 'react';
import DatePicker from 'react-datepicker';
import { getAllBucketImages } from '../api/image';
import 'react-datepicker/dist/react-datepicker.css';

export default function AlbumDatePicker(): ReactElement {
    const [startDate, setStartDate] = useState(new Date());
    return <DatePicker selected={startDate} onChange={(date) => onStartDateChange(date ?? startDate)} />;

    async function onStartDateChange(date: Date): Promise<void> {
        if (!date || startDate === date) return;
        setStartDate(date);

        const response = await getAllBucketImages(date);

        console.log('## response : ', response);
    }
}

// // ReadableStream을 Blob으로 변환하는 함수
// async function streamToBlob(stream: ReadableStream) {
//   const reader = stream.getReader();
//   return new Promise((resolve, reject) => {
//     // @ts-ignore
//     const chunks = [];
//     reader
//       .read()
//       .then(function processChunk({ done, value }) {
//         if (done) {
//           // @ts-ignore
//           const blob = new Blob(chunks, { type: 'image/jpeg' }); // 이미지 타입에 맞게 수정
//           resolve(blob);
//           return;
//         }
//         chunks.push(value);
//         reader.read().then(processChunk);
//       })
//       .catch(reject);
//   });
// }

// // Blob을 이미지 URL로 변환하는 함수
// function blobToImageUrl(blob) {
//   return URL.createObjectURL(blob);
// }

// // 이미지를 표시할 <img> 태그 가져오기
// const imgElement = document.getElementById('your-img-element-id'); // 이미지를 표시할 <img> 태그의 ID를 지정

// // Readable Stream을 Blob으로 변환 후 이미지 URL로 변환하여 <img> 태그의 src에 할당
// streamToBlob(stream)
//   .then(blob => {
//     const imageUrl = blobToImageUrl(blob);
//     imgElement.src = imageUrl;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
