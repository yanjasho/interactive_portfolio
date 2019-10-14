import React from "react";

function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-light" style={{backgroundColor: "#E6E6FA"}}>
      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Your personal achievements
        </button>
        <div className="dropdown-menu">
          {props.achievs.length ? (
            <div>
              {props.achievs.map((achiev, index) =>(
                <button className="dropdown-item" key={index}>{achiev}</button>
              ))}
            </div>
          ):(<button className="dropdown-item">None yet</button>)}
        </div>
      </div>
      <strong className="navbar-brand">Awesome React App</strong>
      <div className="dropdown my-2 my-lg-0 btn-group dropleft">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About my Creator
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="https://github.com/yanjasho" target="_blank">Github</a>
          <a className="dropdown-item" href="https://www.linkedin.com/in/hannahuseva/" target="_blank">LinkedIn</a>
          <a className="dropdown-item" href="https://yanjasho.github.io/" target="_blank">Even less <br /> professional portfolio</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
