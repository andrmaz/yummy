export const apiCall = async(link, params) => {
    const response = await fetch(link, params);
    const data = await response.json();
    return data;
};