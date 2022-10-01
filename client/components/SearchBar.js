import React, { useId, useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const id = useId();
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor={id}>Video Search</label>
          <input
            id={id}
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
};

export default SearchBar;