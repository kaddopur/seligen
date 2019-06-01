import React, { useState } from 'react';
import LensForm from '../components/forms/LensForm';

const article = `【物品內容】 SIGMA 56mm F1.4 DC DN for Sony E

【交易價格】 11000（停售）

【詳細說明】 恆伸公司貨保固三年 Yahoo購物中心購入 全新未拆

【交易地區】 永和、板橋、公館

【照片網址】 需要可站內信

【拍賣連結】 無

【聯絡方式】 站內信 或 Line ID:blaywayne`;

const IndexPage = () => {
  const [lens, setLens] = useState({
    content: 'Sigma 56mm f/1.4 DC DN Contemporary for Sony E',
    price: 11000,
    note: '恆伸公司貨保固三年 Yahoo購物中心購入 全新未拆',
    location: '永和、板橋、公館',
    photoUrl: '需要可站內信',
    auctionUrl: '無',
    contact: '站內信 或 Line ID:blaywayne'
  });

  return (
    <div>
      <div className="columns">
        <div className="column">
          <LensForm lens={lens} setLens={setLens} />
        </div>
        <div className="column">
          <pre>{article}</pre>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
