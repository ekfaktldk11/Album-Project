const lambdaUrl = 'https://7bj9mf3wc3.execute-api.ap-northeast-2.amazonaws.com/call/'; //

export const getAllBucketImages = async (date: Date): Promise<any> => {
    const response = await fetch(lambdaUrl, {
        method: 'GET',
        headers: {
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            Connection: 'keep-alive',
            'Content-Type': 'text/plain',
        },
    });

    if (!response.ok) {
        throw new Error(`getAllBucketImages failed, HTTP status ${response.status}`);
    }

    return response;
};
