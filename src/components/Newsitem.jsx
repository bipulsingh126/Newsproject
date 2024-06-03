import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, url, author, Date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageurl
                ? "https://s.yimg.com/os/creatr-uploaded-images/2022-06/bb155570-ec02-11ec-83fb-c6c11ad20cf4"
                : imageurl
            }
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span class="badge badge-primary">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                by {!author ? "Unknow" : author} on 3 {Date}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
