export const getQueryParams = (url: string): { [key: string]: string } => {
    const queryString = url.split("?")[1];
    const pairs = queryString.split('&');
    const result: { [key: string]: string } = {};

    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        result[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return result;
};

export const sortAscendingOrDescending = (data: any[], sortType: string) => {
    if (sortType === 'Ascending') {
        return data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        return data.sort((a, b) => b.name.localeCompare(a.name));
    }
}