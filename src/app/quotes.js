const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
console.log(quote);
console.log(author);

async function generateQuote() {
    
    const url = 'http://localhost:4000/api/quote';
        
    try {
        const response = await fetch(url, { method: "GET" });

        console.log(response);
        
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log(result);
        if(quote && author) {
            quote.textContent = result.quote || "No quote available.";
            author.textContent = result.author || "Author Unknown.";        
        } else {
            console.error("Quote box element not found!");
        }
        
    } catch (error) {
        console.error("Error fetching quote:", error);
        if (quote) {
            quote.textContent = "Failed to fetch quote. Try again later.";
        }
    }    
};