import React from 'react';

const SearchStatus = ({ searchState, searchTerm }) => {
  let jsx = null;
  switch (searchState.stateId) {
    case 0:
      jsx = null;
      break;
    case 1:
      if (searchState.videos.length > 0) {
        jsx = null;
      } else {
        jsx = <p>No results found for <i>{searchTerm}</i></p>;
      }
      break;
    case 2:
      jsx = <p>Search failed due to an error.</p>
      break;
  }
  return jsx;
};

export default SearchStatus;