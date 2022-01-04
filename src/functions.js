const { default: axios } = require("axios");

const functions = {

    fetchUser: () => axios.get(`https://openlibrary.org/search.json?title=the%20great%20gatsby&limit=200`)
        .then(res => res.data)
        .catch(err => 'error'),
    makeDisplayFoundBooks: () => {
        const property = 'title'
            const displayFoundBooks = [
                        {title: "z title"},
                        {title: "A title"},
                        {title: "c title"},
                        {tile: "B title"},
                    ]
        const sortedArr = displayFoundBooks            
                .sort(function(a, b) {
                    if(a[property] < b[property]) return -1;
                    if(a[property] > b[property]) return 1;
                    return 0;
                })
                return sortedArr
        },
        getCover: () => {
            const book = {
                id: [`123456789`]
            }
            if(book[`isbn`]){
                return `https://covers.openlibrary.org/b/isbn/${book['isbn'][0]}.jpg`
            } else if(book[`oclc`]){
                return `https://covers.openlibrary.org/b/oclc/${book['oclc'][0]}.jpg`
            } else if(book[`lccn`]){
                return `https://covers.openlibrary.org/b/lccn/${book['lccn'][0]}.jpg`
            } else if(book[`olid`]){
                return `https://covers.openlibrary.org/b/olid/${book['olid'][0]}.jpg`
            } else if(book[`id`]){
                console.log(`https://covers.openlibrary.org/b/id/${book['id'][0]}.jpg`)
                return `https://covers.openlibrary.org/b/id/${book['id'][0]}.jpg`
            }
        }

}

module.exports = functions