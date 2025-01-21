
async function copyQuote() {
    
    try{
        let quote = document.querySelector(".quote").textContent;
        let author = document.querySelector(".author").textContent;
        
        console.log(quote + " - " + author);
        
        await navigator.clipboard.writeText(quote + " - " + author);
        alert("Content copied to clipboard");        
        
    } catch (error) {
        console.error('Failed to copy: ', error);
    }    
};


