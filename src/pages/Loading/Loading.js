import React, { useState } from 'react';
import { css } from '@emotion/react';
import SyncLoader from 'react-spinners/SyncLoader';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Loading = () => {
    return (
        <section className='bg-white h-[100vh] flex justify-center items-center'>
            <div className="sweet-loading">
                <SyncLoader color="#EDC126" css={override} size={20} />
            </div>
        </section>
    );
};

export default Loading;