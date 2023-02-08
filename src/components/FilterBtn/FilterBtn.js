export const FilterBtn = ({ text, index,name }) => {
  return (
    <>
      <div>
        <input
        key={text}
          type="radio"
            class="btn-check"
          id={`${name}-${index}` }
          autocomplete="off"
          name={name}
        />
        <label
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}` }
        >
          {text}
        </label>
      </div>
    </>
  );
};
