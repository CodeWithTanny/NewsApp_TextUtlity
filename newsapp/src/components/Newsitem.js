import React, { Component } from 'react'

export class Newsitem extends Component { //rce
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                        <span className="badge rounded-pill bg-danger"> {source}</span>
                    </div>
                    <img src={!imgUrl ? "https://source.unsplash.com/random" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknwon" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem