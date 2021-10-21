document.body.innerHTML = `<section class = "api-books">
<h1 class="heading">ICE and FIRE</h1>
</section>`

// Fetching data required from the API 
async function getBooks(){
    const data = await fetch("https://anapioficeandfire.com/api/books");
    const books = await data.json();
    const apiBooks = document.querySelector(".api-books");
    books.forEach((book)=>{
        const NewDate = new Date(book.released).toDateString();
apiBooks.innerHTML += `
<div class = "Details">
<h2> ${book.name}  </h2>
<p>Isbn: ${book.isbn}</p>
<p>Pages: ${book.numberOfPages}</p>
<p>Publisher: ${book.publisher}</p>
<p>Authors: ${book.authors}</p>
<p>Release Date: ${NewDate} </p>
</div>
 `;

 });
   console.log(books);
}
getBooks();


// Attempt to add minimum 5 characters per book 
// async function getCharacters(){
//     const characters = await fetch ("https://anapioficeandfire.com/api/characters");
//     const apiCharacters= document.querySelector(".api-characters");
// apiCharacters.innerHTML +=`
// <p>${character(book)}</p>`
// return characters;
// }
// getCharacters();

// const api_url = "https://anapioficeandfire.com/api/characters";
// async function getCharacters(url)
// {
// const response = await fetch(url);
// const characters = await response.json();
// console.log(response);
// }
// getCharacters(api_url);
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// for (i=0; i<6; i++){
//     let apiCharacters =`
//     <p>${book.characters}</p>`
//     // return characters(api_url)
// }






// Try and Catch for authors name
try{
    const writer = JSON.parse('{"authors": "George R.R Martin"}');
    console.log("George RR Martin")
}catch(err){
    console.log(err, "This is not the author");
}

