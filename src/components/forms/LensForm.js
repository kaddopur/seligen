import React from 'react';

const LensForm = props => {
  const {
    lens: { content, price, note, location, photoUrl, auctionUrl, contact } = {}
  } = props;

  return (
    <form>
      <div className="field">
        <label className="label">物品內容</label>
        <div className="control">
          <input className="input" type="text" value={content} />
        </div>
      </div>

      <div className="field">
        <label className="label">交易價格</label>
        <div className="control">
          <input className="input" type="number" value={price} />
        </div>
      </div>

      <div className="field">
        <label className="label">詳細說明</label>
        <div className="control">
          <input className="input" type="text" value={note} />
        </div>
      </div>

      <div className="field">
        <label className="label">交易地區</label>
        <div className="control">
          <input className="input" type="text" value={location} />
        </div>
      </div>

      <div className="field">
        <label className="label">照片網址</label>
        <div className="control">
          <input className="input" type="text" value={photoUrl} />
        </div>
      </div>

      <div className="field">
        <label className="label">拍賣連結</label>
        <div className="control">
          <input className="input" type="text" value={auctionUrl} />
        </div>
      </div>

      <div className="field">
        <label className="label">聯絡方式</label>
        <div className="control">
          <input className="input" type="text" value={contact} />
        </div>
      </div>
    </form>
  );
};

export default LensForm;
