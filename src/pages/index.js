import React from 'react';

const article = `【物品內容】sony a6000+sel1650

【交易價格】9500

【詳細說明】

 sony a6000 已過保
公司貨 快門數16300左右
機身下方有傷痕 不影響使用
其餘功能一切正常
完整盒裝+原廠背帶+原廠電池一顆+副廠電池一顆+副廠座充


【交易地區】台中市面交


【拍賣連結】https://shopee.tw/product/17042229/2281837861?smtt=0.0.9

【聯絡方式】站內信`;
import LensForm from '../components/forms/LensForm';

const IndexPage = () => (
  <div>
    <div className="columns">
      <div className="column">
        <LensForm />
      </div>
      <div className="column">
        <pre>{article}</pre>
      </div>
    </div>
  </div>
);

export default IndexPage;
