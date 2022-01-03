import React from "react"
import Book from "./Book"

export default function Form() {
    const [userInput, setUserInput] = React.useState("")
    const [foundData, setFoundData] = React.useState({
        numFound: 0,
        booksArr: [{author_name: "no results yet"}]
    })
    
    function handleChange(event) {
        const {value} = event.target
        setUserInput(value)
    }
    

    function getCover(book){
        if(book.isbn){
            return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}.jpg`
        } else if(book.oclc){
            return `https://covers.openlibrary.org/b/oclc/${book.oclc[0]}.jpg`
        } else if(book.lccn){
            return `https://covers.openlibrary.org/b/lccn/${book.lccn[0]}.jpg`
        } else if(book.olid){
            return `https://covers.openlibrary.org/b/olid/${book.olid[0]}.jpg`
        } else if(book.id){
            return `https://covers.openlibrary.org/b/id/${book.id[0]}.jpg`
        }
    }

    function populateBoksArray(array, data){
        
        for(let i=0; i<data.docs.length;i++){
            // console.log(data.docs[i].author_name ? data.docs[i].author_name.join(`, `) : "no author found")
            array.push({
                author_name: data.docs[i].author_name ? data.docs[i].author_name.join(`, `) : "no author found",
                title: data.docs[i].title,
                first_publish_year: data.docs[i].first_publish_year,
                cover: getCover(data.docs[i])
                })
            // console.log(data.docs[i].first_publish_year)
        }

    }
//pagination can be achieved by limit + offset combination
//maybe pagination value changes depending on display size
    function handleSearch() {
        fetch(`https://openlibrary.org/search.json?title=${userInput}&limit=10&offset=10`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const booksArr = []
            populateBoksArray(booksArr, data)

            setFoundData({
                numFound: data.numFound,
                booksArr: booksArr
            })
        })
        console.log(foundData)
        
    }

    //creating 2 dusplays, hiding one while showing the other
        let displayFoundBooksAlphabetical = foundData.booksArr
        
                        .sort(function(a, b) {
                    if(a.author_name.toLowerCase() < b.author_name.toLowerCase()) return -1;
                    if(a.author_name.toLowerCase() > b.author_name.toLowerCase()) return 1;
                    return 0;
                })
        
        .map((book,index) => (
            <Book 
            key={index} 
            author_name={book.author_name} 
            title={book.title}
            first_publish_year={book.first_publish_year}
            cover={book.cover}
            />
            ))



    let displayFoundBooksDate = foundData.booksArr
        
                    .sort(function(a, b) {
                    if(a.first_publish_year < b.first_publish_year) return -1;
                    if(a.first_publish_year > b.first_publish_year) return 1;
                    return 0;
                })
        
        .map((book,index) => (
            <Book 
            key={index} 
            author_name={book.author_name} 
            title={book.title}
            first_publish_year={book.first_publish_year}
            cover={book.cover}
            />
            ))

    function alphabeticalOrder(){
        console.log("cliquei aqui")

    }


    function dateOrder(){
        console.log(`cliquei date order`)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="book title"
                onChange={handleChange}
                name="userInput"
                //for controled state-> value={userInput} maintains single source of truth
                value={userInput}
                />
            <button onClick={handleSearch}>search</button>
            <p>{foundData.numFound}</p>
            {foundData.numFound>0 && <div><button onClick={alphabeticalOrder}>alphabetical</button><button onClick={dateOrder}>date</button></div> }
            <img src="https://covers.openlibrary.org/b/isbn/9788875213220.jpg" alt="book cover"/>
            {displayFoundBooksAlphabetical}
            {displayFoundBooksDate}
        </div>
    )
}