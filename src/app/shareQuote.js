async function shareQuote() {
    let quote = document.querySelector(".quote").textContent;
    let author = document.querySelector(".author").textContent;

    const quoteContent = quote + " - " + author;
    const message = await encodeURIComponent(quoteContent);
    
    const userAgent = window.navigator.userAgent;
    const screenWidth = window.screen.width;

    console.log("User Agent : ", userAgent ," | ", "screenWidth : ", screenWidth);

    if (screenWidth < 768 || userAgent.match(/Android|iOS|iPhone|iPad|iPod/i)) {
        window.open(`whatsapp://send?text=${message}`, '_blank');    
    } else if (screenWidth > 768) {
        window.open(`https://web.whatsapp.com/send?text=${message}`, '_blank');
    } else {
        window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank'); 
    }    
}