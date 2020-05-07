import * as React from 'react';

interface ISearchBoxProps {
  searchChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: React.SFC<ISearchBoxProps> = ({ searchChange }) => (
  <div className='pa2'>
    <input
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='search robots'
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;