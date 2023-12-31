export const getBooks = async () => {
    const url = '/api/get-books';
    
    const response = await fetch(url);
    if(!response.ok){
        return 'error message'
    }
    const result= await response.json()
    return result.results;
}
