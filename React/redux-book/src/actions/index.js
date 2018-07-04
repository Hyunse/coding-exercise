export function selectBook(book) {
    
    // Return Action
    return {
        type: 'BOOK_SELECTED',
        payload: book        
    };
}