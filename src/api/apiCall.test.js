import fetch from 'node-fetch';

let uri = ''/* paste your search query here */;
const getRecipes = async (fetch) => {
    const results = await fetch(uri);
    const data = await results.json();
    return data;
}

describe('apiCallBack', () => {

    it('should call edamam api to get recipes', () => {
        return getRecipes(fetch).then(data => {
            expect(data.count).toEqual(147);
        })
    });
    it('should be mock fetch calls', () => {
        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 147,
                    hits: [{}, {}]
                })
            }))
        return getRecipes(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith(uri);
            expect(data.count).toBe(147);
            expect(data.hits.length).toBeGreaterThan(1);
        })
    });
    
})
