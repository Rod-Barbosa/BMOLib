import React from "react"
import Book from "./components/Book"

export default function Form() {
//State
    const [userInput, setUserInput] = React.useState("")
    const [foundData, setFoundData] = React.useState({
        numFound: 0,
        booksArr: [{author_name: "no results yet"}]
    })
    const [view, setView] = React.useState(["alphabetical", 0])
    

//Shorter Functions
    function handleChange(event) {
        const {value} = event.target
        setUserInput(value)
    } 

    function handleSearch() {
        setView(oldView=>([...oldView]))
    }

    function alphabeticalOrder(){
        setView(["alphabetical", 0])
    }

    function dateOrder(){
        setView(["date", 0])
    }

    function decreaseView(){
        setView(oldView=>([oldView[0], oldView[1]-25]))
    }

    function increaseView(){
        setView(oldView=>([oldView[0], oldView[1]+25]))
    }


//Trying all possible alternatives to get a cover. Unfortuantly, it doesn't address images that are just a pixel.
//Called on line67
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

//Called on line 116
//Instead of using all the data returned, selects just a few of the items
    function populateBoksArray(array, data){
        for(let i=0; i<data.docs.length;i++){
            //author_name can return an array or nothing at all, hence the special attention
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

//Called on line 97
//Avoid making unnecessary computations
    function makeDisplayFoundBooks(property){
        displayFoundBooks = foundData.booksArr
        
        .sort(function(a, b) {
            if(a[property] < b[property]) return -1;
            if(a[property] > b[property]) return 1;
            return 0;
        })
        
        .map((book,index) => (
            <Book 
            key={index} 
            author_name={book.author_name} 
            title={book.title}
            first_publish_year={book.first_publish_year}
            cover={book.cover}
            id={index}
            />
            ))
            .slice(view[1], (view[1] + 25)  //this is how I am implementing pagination
        )
    }


//Element that gets mapped over to pass props to Book component
    let displayFoundBooks = ''
        if(view[0]==="alphabetical"){
            makeDisplayFoundBooks("title")
        } else {
            makeDisplayFoundBooks("first_publish_year")
        }

//Keeps track of changes on view mode and pagination
    React.useEffect(()=>{
//only makes an API call if user has inserted some values
//With extra time, this would be agood place for security/vulnerabilities checks
        if(userInput!==""){
            fetch(`https://openlibrary.org/search.json?title=${userInput}&limit=200`)
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
        }
            // console.log(foundData)
    }, [view])


    return (
        <div className="container">

        <main className="main">
            <h1 className="main__title">BMO Library</h1>
            <div className="inputBlock">
            <input
                calssName="inputBlock__input"
                type="text"
                placeholder="book title"
                onChange={handleChange}
                name="userInput"
                //for controled state-> value={userInput} maintains single source of truth
                value={userInput}
                style=
                    {{
                        height: 30, 
                        border: 'none',
                        borderRadius: 4,
                        fontFamily: 'Maven Pro',
                        fontSize: 18,
                        fontWeight: 500,
                        paddingLeft: 15,
                        width: 150
                    }}
                />
            <button className="inputBlock__searchBtn" onClick={handleSearch}>Search</button>
            </div>
            <div className="searchDisplay">

            <p className="searchDisplay__text">
                <span className="searchDisplay--results">{foundData.numFound}</span> results
            </p>
            <div className="searchDisplay__OrderButtons">
            {foundData.numFound>0 && 
                <div>
                    <button className={`searchDisplay__button${view[0]==="alphabetical" ? "--selected" : ""}`} onClick={alphabeticalOrder}>a - z</button>
                    <button className={`searchDisplay__button${view[0]!=="alphabetical" ? "--selected" : ""}`} onClick={dateOrder}>Date</button>
                </div>}
            </div>
            
            </div>
            {displayFoundBooks}

{/* so many conditional renderings are impacting performance, but it is better than showing buttons that won't work as intended
maybe a loading function would suffice...? */}
            {foundData.numFound>0 && 
            <div className="pagination">
                <p className="pagination--text">
                {view[1]>=25 && <button className="pagination__button" onClick={decreaseView}>back</button>}

                    {view[1]+1}/{(view[1]+25)<=foundData.numFound ? view[1]+25 : foundData.numFound }

                {(view[1]+25)<=foundData.numFound && <button className="pagination__button" onClick={increaseView}>next</button>} <br />of {foundData.numFound}</p>
            
            </div>
            }
        </main>
        <footer className="footer">
            courtesy of <a  href="https://openlibrary.org/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer_link">Open Library
                </a>
        </footer>
        </div>

    )
}