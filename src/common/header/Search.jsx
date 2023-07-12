import React from 'react';
import logo from '../../images/techno.png';
const Search = () => {
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
            <div className='logo width'>
                <img src={logo} alt="Logo"style={{ width: '200px', height: 'auto' }} />
            </div>
        </div>
      </section>
    </>
  );
};

export default Search;