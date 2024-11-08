export const getQueryParams = (url: string): { [key: string]: string } => {
    const queryString = url.split("?")[1];
    const pairs = queryString.split('&');
    const result: { [key: string]: string } = {};

    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        result[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    console.log('result', result);
    return result;
};