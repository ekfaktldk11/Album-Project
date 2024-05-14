// const testUrl = "https://www.google.com/imgres?q=%EC%9D%B4%EB%AF%B8%EC%A7%80&imgurl=https%3A%2F%2Fgongu.copyright.or.kr%2Fgongu%2Fwrt%2Fcmmn%2FwrtFileImageView.do%3FwrtSn%3D9046601%26filePath%3DL2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY%3D%26thumbAt%3DY%26thumbSe%3Db_tbumb%26wrtTy%3D10004&imgrefurl=https%3A%2F%2Fgongu.copyright.or.kr%2Fgongu%2Fwrt%2Fwrt%2Fview.do%3FwrtSn%3D9046601%26menuNo%3D200018&docid=tu9E8107pOQKwM&tbnid=nqo-VS8SZavrRM&vet=12ahUKEwjbyZXcnNKFAxX_hlYBHZd4AsMQM3oECA8QAA..i&w=986&h=740&hcb=2&ved=2ahUKEwjbyZXcnNKFAxX_hlYBHZd4AsMQM3oECA8QAA";

export async function getAllBucketImages(date: Date): Promise<any> {
    const response = await fetch(lambdaUrl, {
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "text/plain",
        }
    });

    const json = await response.json();
    return json;
}