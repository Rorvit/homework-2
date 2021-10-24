import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");
  //   const tags = [];
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";

    return classes;
  };
  //   const renderTags = () => {
  //     if (tags.length === 0) return "Тегов не найдено";
  //     return tags.map((tag) => <li key={tag}>{tag}</li>);
  //   };
  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    console.log(productId);
    setCount(count - 1 > 0 ? count - 1 : 0);
  };
  return (
    <>
      {/* {tags.length === 0 && "Теги не найдены"}
      {renderTags()} */}
      {/* <img src={imageUrl} alt="" /> */}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
