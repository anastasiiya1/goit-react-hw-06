import css from './SearchBox.module.css';

function SearchBox({ value, onSearch }) {
  return (
    <>
      <div className={css.form}>
        <label className={css.label} htmlFor="userQuery">
          Find contacts by name
        </label>
        <input
          className={css.field}
          type="text"
          name="userQuery"
          id="userQuery"
          value={value}
          onChange={(event) => onSearch(event.target.value)}
          placeholder='Enter a name to search...'
        />
      </div>
    </>
  );
}

export default SearchBox;
