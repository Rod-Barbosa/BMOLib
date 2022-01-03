import React from "react"

export default function Book(props){
    return (
        <div className="book">
        <p className="book__title"><span className="book--detail">title</span>: {props.title}</p>
        <p className="book__author"><span className="book--detail">author</span>: {props.author_name}</p>
        <p className="book__year"><span className="book--detail">year</span>: {props.first_publish_year}</p>
        {/* <p>{props.cover}</p> */}
        {/* some images return just a pixel */}
        { props.cover && <img className="book__cover" src={`${props.cover}`} alt="book cover"/>}
        <p className="book__id">{props.id + 1}</p>
        </div>
    )
}
