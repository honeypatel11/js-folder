let Rowquotes = document.getElementById("quote-row");

let quotes = [
    { quote: "Every AI breakthrough is a stepping stone; together, we march toward a future lightened by collaboration between man’s imagination and machine’s precision.", author: "john doe" },
    {  quote: "AI is not the architect of our future, but rather the compass guiding us through uncharted territories of imagination and creativity." , author: "jesica shah"},
    { quote: "With each AI tool we embrace, we don’t just pave a path to the future; we ignite the dance of collaboration between human spirit and digital intellect.", author: "aryan patel" },
    { quote: "The future awaits as we partner with AI—creating a symphony where technology amplifies our dreams into melodies of change.", author: "khushbu patel" },
    { quote: "In the hands of the curious, AI tools become not just instruments of efficiency, but lighthouses illuminating the vast ocean of potential that lies ahead.", author: "honey patel" },
    {  quote: "AI is not the architect of our future, but rather the compass guiding us through uncharted territories of imagination and creativity" , author: "jesica shah"},
    { quote: "With each AI tool we embrace, we don’t just pave a path to the future; we ignite the dance of collaboration between human spirit and digital intellect.", author: "aryan patel" },
    { quote: "The future awaits as we partner with AI—creating a symphony where technology amplifies our dreams into melodies of change.", author: "khushbu patel" },
    { quote: "In the hands of the curious, AI tools become not just instruments of efficiency, but lighthouses illuminating the vast ocean of potential that lies ahead.", author: "honey patel" }
];



quotes.forEach((data) => {
    Rowquotes.innerHTML += `
      <div class="col-lg-4"> 
                   <div class="bg-danger-subtle text-dark fw-bold mt-3 h-100 text-center p-3">
                    <figure>
                        <blockquote class="blockquote">
                        <p>${data.quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer bg-danger-subtle text-dark fw-bold mt-3 fs-5">
                        Someone famous like <cite title="Source Title">${data.author}</cite>
                        </figcaption>
                    </figure>     
                   </div>       
                </div> 
    `

    
});