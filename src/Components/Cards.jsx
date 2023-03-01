import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState, useRef } from "react";
import SingleCard from "./SingleCard";
function Cards() {
  const [items, setitems] = useState(
    [
      {
        id: 1,
        img: "https://robohash.org/delenitiestsint.png?size=300x300&set=set1",
      },
      {
        id: 1,
        img: "https://robohash.org/delenitiestsint.png?size=300x300&set=set1",
      },
      {
        id: 2,
        img: "https://robohash.org/remdoloremeum.png?size=300x300&set=set1",
      },
      {
        id: 2,
        img: "https://robohash.org/remdoloremeum.png?size=300x300&set=set1",
      },
      {
        id: 3,
        img: "https://robohash.org/esttemporeomnis.png?size=300x300&set=set1",
      },
      {
        id: 3,
        img: "https://robohash.org/esttemporeomnis.png?size=300x300&set=set1",
      },
      {
        id: 4,
        img: "https://robohash.org/minusetsed.png?size=300x300&set=set1",
      },
      {
        id: 4,
        img: "https://robohash.org/minusetsed.png?size=300x300&set=set1",
      },

      {
        id: 5,
        img: "https://robohash.org/eosnobisarchitecto.png?size=300x300&set=set1",
      },

      {
        id: 5,
        img: "https://robohash.org/eosnobisarchitecto.png?size=300x300&set=set1",
      },
      {
        id: 6,
        img: "https://robohash.org/liberonullaperferendis.png?size=300x300&set=set1",
      },
      {
        id: 6,
        img: "https://robohash.org/liberonullaperferendis.png?size=300x300&set=set1",
      },
      {
        id: 7,
        img: "https://robohash.org/quibusdamsuscipitquaerat.png?size=300x300&set=set1",
      },
      {
        id: 7,
        img: "https://robohash.org/quibusdamsuscipitquaerat.png?size=300x300&set=set1",
      },
      {
        id: 8,
        img: "https://robohash.org/laboriosamvoluptaset.png?size=300x300&set=set1",
      },
      {
        id: 8,
        img: "https://robohash.org/laboriosamvoluptaset.png?size=300x300&set=set1",
      },
    ].sort(() => Math.random() - 0.5)
  );
  // clickHistory to store as array
  const [clickHistory, setClickHistory] = React.useState([]);
  const [openState, setOpenState] = React.useState({});
  const [flippedCard, setFlippedcard] = useState(-1);
  React.useEffect(() => {
    if (flippedCard !== -1) {
      setTimeout(() => {
        setFlippedcard(-1);
      }, 5000);
    }
  }, [flippedCard]);
  React.useEffect(() => {
    if (clickHistory?.length >= 2) {
      const lastItem = clickHistory[clickHistory.length - 1];
      const lastBeforeItem = clickHistory[clickHistory.length - 2];
      if (
        lastItem.img === lastBeforeItem.img &&
        lastItem.id !== lastBeforeItem.id
      ) {
        setOpenState((prev) => ({
          ...prev,
          [lastItem.id]: true,
          [lastBeforeItem.id]: true,
        }));
      }
    }
  }, [clickHistory]);
  const handleClick = (id, img) => {
    if (!openState[id]) {
      const clickList = [...clickHistory];

      clickList.push({ id, img });
      console.log(clickList);
      setClickHistory(clickList);
      setFlippedcard(id);
    }
  };
  
  return (
    <div>
      <div>
        <p>Select two cards with same content</p>
      </div>
      <div className="card-container">
        {items.map((item, index) => (
          <SingleCard
            key={index}
            id={index}
            img={item.img}
            openState={openState}
            handleClick={handleClick}
            showContent={flippedCard === index}
          />
        ))}
      </div>
      <div>{<p>Number of clicks: {clickHistory.length}</p>}</div>
    </div>
  );
}

export default Cards;
