import React, { useState } from "react";
const img = [
  {
    id: 1,
    img: "https://robohash.org/delenitiestsint.png?size=300x300&set=set1",
  },
  {
    id: 2,
    img: "https://robohash.org/delenitiestsint.png?size=300x300&set=set1",
  },
  {
    id: 3,
    img: "https://robohash.org/remdoloremeum.png?size=300x300&set=set1",
  },
  {
    id: 4,
    img: "https://robohash.org/remdoloremeum.png?size=300x300&set=set1",
  },
  {
    id: 5,
    img: "https://robohash.org/esttemporeomnis.png?size=300x300&set=set1",
  },
  {
    id: 6,
    img: "https://robohash.org/esttemporeomnis.png?size=300x300&set=set1",
  },
  {
    id: 7,
    img: "https://robohash.org/minusetsed.png?size=300x300&set=set1",
  },
  {
    id: 8,
    img: "https://robohash.org/minusetsed.png?size=300x300&set=set1",
  },

  {
    id: 9,
    img: "https://robohash.org/eosnobisarchitecto.png?size=300x300&set=set1",
  },

  {
    id: 10,
    img: "https://robohash.org/eosnobisarchitecto.png?size=300x300&set=set1",
  },
  {
    id: 11,
    img: "https://robohash.org/liberonullaperferendis.png?size=300x300&set=set1",
  },
  {
    id: 12,
    img: "https://robohash.org/liberonullaperferendis.png?size=300x300&set=set1",
  },
  {
    id: 13,
    img: "https://robohash.org/quibusdamsuscipitquaerat.png?size=300x300&set=set1",
  },
  {
    id: 14,
    img: "https://robohash.org/quibusdamsuscipitquaerat.png?size=300x300&set=set1",
  },
  {
    id: 15,
    img: "https://robohash.org/laboriosamvoluptaset.png?size=300x300&set=set1",
  },
  {
    id: 16,
    img: "https://robohash.org/laboriosamvoluptaset.png?size=300x300&set=set1",
  },
];

const SingleCard = ({ id, showContent, img, openState, handleClick }) => {
  return (
    <div
      className={`card ${
        showContent || openState[id] ? "back-card" : "front-card"
      }`}
      onClick={() => handleClick(id, img)}
    >
      {showContent || openState[id] ? (
        <img src={img} style={{ width: "60px", height: "60px" }} />
      ) : (
        id
      )}
    </div>
  );
};
export default SingleCard;
