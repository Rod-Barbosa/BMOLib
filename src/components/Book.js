import React from "react"

export default function Book(props){
    return (
        <div>
        <h1>{props.author_name}</h1>
        <p>{props.title}</p>
        <p>{props.first_publish_year}</p>
        <p>{props.cover}</p>
        {/* some images cme back just a pixel */}
        <img src={`${props.cover}`} alt="book cover"/>
        </div>
    )
}
