import styles from "./Filter.module.css";
const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.imput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
