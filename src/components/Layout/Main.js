import MediaCard from "./Card";
import { useEffect } from "react";
import "./Main.css";

const Main = (props) => {
  const { getShoes, items, user, addToCartFn } = props;

  useEffect(() => {
    getShoes();
  }, [getShoes]);

  const loaded = () => {
    return items.map((item) => (
      <div className="main-item" key={item._id}>
        <MediaCard
          mediaCardKey={item._id}
          item={item}
          getShoes={getShoes}
          user={user}
          addToCartFn={addToCartFn}
        />
      </div>
    ));
  };

  const loading = () => {
    return <h1>loading...</h1>;
  };

  return props.items ? loaded() : loading();
};

export default Main;
