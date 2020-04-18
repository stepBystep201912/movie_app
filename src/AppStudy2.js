import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2018%2F10%2F03%2F122c9216ad8548da2c60ca8c8a5f4a1e1.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id: 2,
    name: "pizza",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jp1Pe7RoQW1zXlSUATRYeQHaEo%26pid%3DApi&f=1",
    rating: 4.4
  },
  {
    id: 3,
    name: "korea one table",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F91%2F0a%2F5f%2F910a5f46875e257f545d89e8c2dc949f.jpg&f=1&nofb=1",
    rating: 4.8
  },
  {
    id: 4,
    name: "spachetti",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtpRkP5s5Sn4%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.3
  }
];

// function renderFood(dish) {
//   // console.log(dish);
//   // return <Food name={dish.name} picture={dish.image} />;
//         // foodILike.map(renderFood)}
// }

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
