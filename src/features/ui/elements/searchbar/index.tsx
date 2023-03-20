import React, { useEffect, useState } from 'react';
import ScreenReaderLabel from '../screen-reader-label';
import StyledTextInput from '../_form/text-input';
import StyledSearchbar, {
  StyledDeleteIcon,
  StyledSearchbarInput,
  StyledSearchIcon,
} from './searchbar.styles';

interface SearchbarProps {
  ariaLabel?: string;
  isRequired?: boolean;
  onSearchType: (value: string) => void;
  placeholder?: string;
}

export default function Searchbar({
  ariaLabel = 'Search',
  isRequired = false,
  onSearchType,
  placeholder = 'Search',
}: SearchbarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const deleteTextHandler = () => {
    setSearchQuery('');
  };

  useEffect(() => onSearchType(searchQuery), [searchQuery]);

  return (
    <StyledSearchbar>
      <ScreenReaderLabel text={ariaLabel} />
      <StyledSearchbarInput>
        <StyledSearchIcon>
          <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </StyledSearchIcon>
        <StyledTextInput
          onChange={inputChangeHandler}
          placeholder={placeholder}
          required={isRequired}
          value={searchQuery}
        />
        {searchQuery.length > 0 && (
          <StyledDeleteIcon
            data-testid="searchbar-empty-btn"
            onClick={deleteTextHandler}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </StyledDeleteIcon>
        )}
      </StyledSearchbarInput>
    </StyledSearchbar>
  );
}
