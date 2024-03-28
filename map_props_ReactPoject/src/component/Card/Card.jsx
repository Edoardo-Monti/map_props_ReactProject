import React from "react"
import "./Card.css"

export default function Card(props){
    console.log(props)
    return (
        <>
            <div className="container w-75">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="img-cont col-md-4">
                            <img src={props.imageUrl} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text description">{props.description}</p>
                                <p className="card-text"><small className="text-body-secondary">{props.lastUpdate}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}