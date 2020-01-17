import React, { Fragment } from 'react';
import styled from 'styled-components';

const PttView = styled.article`
  background-color: black;
  color: white;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 18px;
  line-height: 1.2;
`;

const PttHeader = styled.header``;

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

const PttContent = styled.section`
  padding: 1.2em 0;
`;

const PttContentItem = styled.div`
  display: flex;
  margin-top: 1.2em;
`;

const PttContentItemTag = styled.div`
  color: #ff6;
`;

const PttContentItemValue = styled.div``;

const PttFooter = styled.footer`
  padding-bottom: 1.2em;
`;

const PttFooterItem = styled.div`
  color: #090;
`;

const PttFooterItemLink = styled.span`
  color: #aaa;
  text-decoration: underline;
`;

const getDisplayTime = date => {
  let dateString = date.toString();
  return dateString.replace(/(\d{4}) (.*) GMT.*$/, (match, year, time) => ` ${time} ${year}`);
};

const LensPttView = () => {
  return (
    <PttView>
      <PttHeader>
        <PttHeaderItem>
          <PttHeaderItemTag>作者</PttHeaderItemTag>
          <PttHeaderItemValue>Seligen (買賣文章產生器)</PttHeaderItemValue>
        </PttHeaderItem>

        <PttHeaderItem>
          <PttHeaderItemTag>標題</PttHeaderItemTag>
          <PttHeaderItemValue>[售/全國] Sigma 17-50mm F2.8 For Sony A環</PttHeaderItemValue>
        </PttHeaderItem>

        <PttHeaderItem>
          <PttHeaderItemTag>時間</PttHeaderItemTag>
          <PttHeaderItemValue>{getDisplayTime(new Date())}</PttHeaderItemValue>
        </PttHeaderItem>
      </PttHeader>

      <PttContent>
        <PttContentItem>
          <PttContentItemTag>【物品內容】</PttContentItemTag>
          <PttContentItemValue>Sigma 17-50mm F2.8 DC EX FSM OS For Sony A環</PttContentItemValue>
        </PttContentItem>

        <PttContentItem>
          <PttContentItemTag>【交易價格】</PttContentItemTag>
          <PttContentItemValue>6500元</PttContentItemValue>
        </PttContentItem>

        <PttContentItem>
          <PttContentItemTag>【詳細說明】</PttContentItemTag>
          <PttContentItemValue>有防手震版本，有使用痕跡，都放防潮箱，8成新 易碎物品，寄送恕不退貨</PttContentItemValue>
        </PttContentItem>

        <PttContentItem>
          <PttContentItemTag>【交易地區】</PttContentItemTag>
          <PttContentItemValue>全國/寄送，台中市區/面交</PttContentItemValue>
        </PttContentItem>
        <PttContentItem>
          <PttContentItemTag>【照片網址】</PttContentItemTag>
          <PttContentItemValue>https://reurl.cc/b6jVXy</PttContentItemValue>
        </PttContentItem>
        <PttContentItem>
          <PttContentItemTag>【拍賣連結】</PttContentItemTag>
          <PttContentItemValue>https://reurl.cc/b6jVXy</PttContentItemValue>
        </PttContentItem>
        <PttContentItem>
          <PttContentItemTag>【聯絡方式】</PttContentItemTag>
          <PttContentItemValue>站內信或拍賣下標</PttContentItemValue>
        </PttContentItem>
      </PttContent>

      <PttFooter>
        <div>--</div>
        <PttFooterItem>
          ※ 發信站: 批踢踢實業坊(ptt.cc), 來自: <PttFooterItemLink>127.0.0.1</PttFooterItemLink> (臺灣)
        </PttFooterItem>
        <PttFooterItem>
          ※ 文章網址: <PttFooterItemLink>https://www.ptt.cc/bbs/DC_SALE/F.0123456789.O.BAR.html</PttFooterItemLink>
        </PttFooterItem>
      </PttFooter>
    </PttView>
  );
};

export default LensPttView;
