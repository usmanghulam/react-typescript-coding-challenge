import React, { FC } from 'react';

const MoreBtn:FC<{ loadMoreUsers: () => void; }> = ({ loadMoreUsers }) => {
  return <div className='text-center' style={{ width: "100%" }}><button 
  onClick={() => loadMoreUsers()}
  className='btn btn-outline-info'
  >Load more...</button></div>;
}

export default MoreBtn;
