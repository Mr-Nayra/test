import React from 'react';

interface Props {
  textWithNewlines: string;
}

const DisplayTextWithNewlines: React.FC<Props> = ({ textWithNewlines }) => {
  const formattedText = textWithNewlines.replace(/\\n/g, '\n');

  return (
    <div>
      {formattedText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default DisplayTextWithNewlines;
