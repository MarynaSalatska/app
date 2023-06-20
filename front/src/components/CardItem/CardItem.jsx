import React from "react";
import css from "../CardItem/CardItem.module.css";

const CardItem = ({ data, onEdit, onDelete }) => {
  return (
    <div className={css.superheroCard}>
      <h3>{data.nickname}</h3>
      {/* <img src={item.image_src} alt={item.nickname} width={200} /> */}
      <img src={data.image_src} alt={data.nickname} />
      <p>Real_name : {data.real_name}</p>
      <p>Origin_Description : {data.origin_description}</p>
      <p>Super_Powers : {data.superpowers}</p>
      <p>Catch_Phrase : {data.catch_phrase}</p>
      <div className={css.superheroCardbtn}>
        <button onClick={() => onEdit(data)}>Edit</button>

        <button onClick={onDelete} data-key={data._id}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardItem;
{/* <li key={item._id}>
  // Nick_Name : {item.nickname}
  // Real_name : {item.real_name}
  // Origin_Description : {item.origin_description}
  // Super_Powers : {item.superpowers}
  // Catch_Phrase : {item.catch_phrase}
  // - Image: // <img src={item.image_src} alt={item.nickname} width={200} />
  //{" "}
  <button onClick={handleDelete} data-key={item._id}>
    // Delete //{" "}
  </button>
  //{" "}
</li>; */}