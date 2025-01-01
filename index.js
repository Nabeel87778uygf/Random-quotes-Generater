const quotes = [    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey" ];

    function getRandomQuote(){
        const randomindex = Math.floor(Math.random() * quotes.length);
        return quotes[randomindex];
    }
    function displayquote(){
        const quoteElement = document.getElementById("quote");
        quoteElement.textContent = getRandomQuote();
    }
    function displayQuote(){
        let quote = document.getElementById("generateQuote").innerHTML = displayquote();
        console.log(quote);
    }