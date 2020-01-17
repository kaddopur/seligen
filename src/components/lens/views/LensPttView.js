import React, { Fragment } from 'react';
import styled from 'styled-components';

const PttHeader = styled.header`
  background-color: black;
  color: white;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 1em;
  line-height: 1.2;
`;

const PttHeaderItem = styled.div`
  background-color: #008;
  display: flex;
`;

const PttHeaderItemTag = styled.div`
  background-color: #999;
  color: #008;
  padding: 0 1ex;
`;

const PttHeaderItemValue = styled.div`
  padding: 0 1ex;
`;

const getDisplayTime = date => {
  let dateString = date.toString();
  return dateString.replace(/(\d{4}) (.*) GMT.*$/, (match, year, time) => ` ${time} ${year}`);
};

const LensPttView = () => {
  return (
    <article>
      <PttHeader>
        <PttHeaderItem>
          <PttHeaderItemTag>作者</PttHeaderItemTag>
          <PttHeaderItemValue>Seligen (買賣文章產生器)</PttHeaderItemValue>
        </PttHeaderItem>
        <PttHeaderItem>
          <PttHeaderItemTag>標題</PttHeaderItemTag>
          <PttHeaderItemValue>[新聞] 影／罷韓投票要花8千萬 尹立：不能用財政</PttHeaderItemValue>
        </PttHeaderItem>
        <PttHeaderItem>
          <PttHeaderItemTag>時間</PttHeaderItemTag>
          <PttHeaderItemValue>{getDisplayTime(new Date())}</PttHeaderItemValue>
        </PttHeaderItem>
      </PttHeader>
      <h3>LensPttView</h3>
    </article>
  );
};

export default LensPttView;
