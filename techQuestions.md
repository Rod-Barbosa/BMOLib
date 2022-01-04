1. How long did you spend on the coding assignment?
a. What would you add to your solution if you had more time?
b. If you didn't spend much time on the coding test, then use this as an opportunity to
explain what you would add.
2. What was the most useful feature that was added to the latest version of your chosen
language? Please include a snippet of code that shows how you've used it.
3. How would you track down a performance issue in production? Have you ever had to do this?
4. How would you improve the API that you just used?
5. Please describe yourself using correctly formatted JSON.


# 1. long did you spend on the coding assignment?
 - 2 days 
    I got the assignment on my inbox at December/30 afternoon) and will submit by Jan/3 night
## a. What would you add to your solution if you had more time?
 - Decent Jasmine testing suite. 
    I could force something out but testing on the same day is begging for not spotting the most obvious problems. And Tomorrow..
 - Implement a "buy book" button
    It isn't as easy as linking hte amazon_id piece of info. Some books don't have it. Dealing with so many edge cases would prove counter productive with my time restraints.
 - Validade user input. 
    Limiting amount of characters and making sure no security vulnerabilities go unaddressed.
 - Deal with Covers that return a pixel image.
    My current funcion checks for library not existing and goes on to the next option. But it stops at covers that are mere pixels. It looks bad, but it would demand real time to address correctly
 - Clean up the initial screen.
    Right now the behaviour before the user has inpu anything on search bar is too messy.
 - A reset button.
    I wanted to make the title of the page clickable, so that the search would be clean and everything would return the the initial state. But on the phone screen the title and the search button are too close. It would certainly create situations were the user accidentaly resets a search while trying to search for something else. I would have to go through the button sizes and fine tune them. And it would have to be done for every display size.

# 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it
    - React hooks are a game changer. Specially useEffect. 
        Good bye repeating code for componentDidMount and componentDidUpdate.
```React
    React.useEffect(()=>{
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
    }, [view])
```
    the Dependencies array ( [view] on the example above) when empty can simulate componentDidMout. And useEffect makes the code much more elegant once we don't have to deal with binding functions on class Components

# 3. How would you track down a performance issue in production? Have you ever had to do this?
    The Firefox Developer tools has a Performance tab that saved my life multiple times. In the beginning, call trees can seem overkill, and I definetly don't understand them 100%. But it has helped me making decisions on which parts of a website need to change and which ones are good enough.
    Sure google chrome also has it, but the Mozilla tutorials click with me. Also, the Firefox developer tools in general have better usability. 

# 4. How would you improve the API that you just used?
 - It was hard finding an exemple of how the query parameters "limit" and "offset" work. 
    I think pagination is a good solution for this type of API. Also, limit is implicitly 100. it creates bad behaviour with different display orders. For a while i was alphabetically sorting only the first 25 results received, not all 169 that gatsby generates. It would get even more evident while switching between year and author name
 - I know there are ways to sort resolts on fetch request.
    I found an example of how -created header works. But couldn't find any other options
 - I would get rid of cover images that are just a pixel. 
    Or at least return them in a way that makes it easy to ignore/flag

# 5. Please describe yourself using correctly formatted JSON.
{
    "firstName": "Rodrigo",
    "lastName": "Barbosa",
    "fullName": "Rodrigo Piedade Tebaldi Barbosa",
    "nationality": "Brazilian"
    "languages": ["portuguese", "english", "spanish", "french"],
    "webdeveloperExperienceYears": { 
            "JavaScript": 7,
            "CSS": 7,
            "HTML": 7,
            "React": 3,
            "Vue": 2,
            "WordPress": 1
        },
    "LinkedIn": "https://www.linkedin.com/in/rodrigo-piedade-barbosa/"
}