import styles from "./Category.module.css";
export const Category = ({ handleClick, pannel, value }) => {
  const [post, user] = value;
  return (
    <div className={`${styles.category} category_${pannel}`}>
      <button
        onClick={handleClick}
        value={post}
        className={pannel === value[0] ? `${styles.pannel_active}` : null}
      >
        {post}
      </button>
      <button
        onClick={handleClick}
        value={user}
        className={pannel === value[1] ? `${styles.pannel_active}` : null}
      >
        {user}
      </button>
    </div>
  );
};
export default Category;
