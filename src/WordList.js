import React, { useState } from 'react';

const WordList = () => {
  const [inputValue, setInputValue] = useState('');
  const [wordList, setWordList] = useState(['Hello', 'There', 'eHello', 'Ther', 'reHello', 'The']);

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    const updatedWordList = wordList.map((word, index) => {
      if (index === 0) {
        return newInputValue + word.slice(0, -1);
      } else {
        return wordList[index - 1].slice(-1) + word.slice(0, -1);
      }
    });
    setInputValue(newInputValue);
    setWordList(updatedWordList);
  };

  return (
    <div>
      <ul>
        {wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default WordList;
