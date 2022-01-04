const functions = require(`./functions`)

test(`Calling the great gatsby should return 169 docs`, ()=>{
    expect.assertions(1)
    return functions.fetchUser()
        .then(data => {
            expect(data.numFound).toBe(169)
        })
})

test(`Array of objects returned alphabeticaly based on property string`, ()=>{
    expect(functions.makeDisplayFoundBooks()[0]).toEqual({
        title: "A title"
    })
})

test(`get something, even if lots of the image arrays don't exist`, ()=>{
    expect(functions.getCover()).not.toBeUndefined()
})
