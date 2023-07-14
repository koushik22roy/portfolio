/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Workitems = ({ item }) => {
  const handleDemoClick = (e) => {
    e.preventDefault();
    if (item.videoLink) {
      window.open(item.videoLink, "_blank");
    }
  };
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.description ? (
        <p className="work__description">{item.description}</p>
      ) : null}

      {/* <a href="" className="work__button">Demo <i className='bx bx-right-arrow-alt work__button-icon'></i></a> */}
      {item.videoLink ? (
        <a href="#" className="work__button" onClick={handleDemoClick}>
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : null}
    </div>
  );
};

export default Workitems;
