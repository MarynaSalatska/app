import CardItem from "../CardItem/CardItem";
import css from "../CardList/CardList.module.css";
const CardList = ({ data, handleEdit, handleDelete }) => {
  return (
    <ul className={css.cardList}>
      {data.map((item) => (
        <li key={item._id}>
          <CardItem data={item} onEdit={handleEdit} onDelete={handleDelete} />

          {/* <button onClick={handleDelete} data-key={item._id}> 
                Delete 
              </button> */}
        </li>
      ))}
    </ul>
  );
};
export default CardList;
