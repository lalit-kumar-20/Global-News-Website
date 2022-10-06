import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0px'}}>     
        <span className="badge rounded-pill bg-danger" >
          {source} </span>
          </div>
          <img src={!imgUrl?"https://c.ndtvimg.com/2022-09/ab4pmbko_jasprit-bumrah-afp_625x300_30_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
          :imgUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className="text-danger">By {!author ? "Unknown": author}  on {new Date(date).toGMTString()}</small></p>
             <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
             </div>
          </div>
       </div>
      // </div>
    )
  }
}

export default NewsItem