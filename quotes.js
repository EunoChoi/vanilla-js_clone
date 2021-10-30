const quotes = [
    {
      quotation:
        "“If you don't make mistakes, you're not working on hard enough problems. And that's a mistake.”",
      author: "Frank Wilczek"
    },
    {
      quotation:
        "“It does not matter how slowly you go as long as you do not stop.”",
      author: "Confucius"
    },
    {
      quotation: "Only I can change my life. No one can do it for me.”",
      author: "Carol Burnett"
    },
    {
        quotation: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "Robert Kiyosaki"
    },
    {
        quotation: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        quotation: "It is your determination and persistence that will make you a successful person.",
        author: "Kenneth J Hutchins"
    },
    {
        quotation: "You can waste your life drawing lines. Or you can live your life crossing them.",
        author: "Shonda Rhimes"
    },
    {
        quotation: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "Alex Rodriguez"
    }
  ];

const quotesText = document.querySelector("#quotes");
const quoteRand = Math.floor(Math.random()*quotes.length);


quotesText.innerText = `${quotes[quoteRand].quotation} - ${quotes[quoteRand].author}`;