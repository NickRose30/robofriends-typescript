import * as React from 'react';

// could also use this apprach, just showing a dif way to do it
// interface IScrollProps {
//   children?: JSX.Element;
// };

const Scroll: React.SFC<{}> = ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {children as JSX.Element}
    </div>
  );
};

export default Scroll;