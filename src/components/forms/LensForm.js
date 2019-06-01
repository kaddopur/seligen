import React from 'react';

const LensForm = props => {
  const {
    lens: {
      content,
      price,
      note,
      location,
      photoUrl,
      auctionUrl,
      contact
    } = {},
    setLens = () => {}
  } = props;

  const setLensField = e => {
    const { target: { dataset = {}, value } = {} } = e;

    setLens({
      ...props.lens,
      [dataset.fieldName]: value
    });
  };

  return (
    <form>
      <div className="field">
        <label className="label">物品內容</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={content}
            onChange={setLensField}
            data-field-name="content"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">交易價格</label>
        <div className="control">
          <input
            className="input"
            type="number"
            value={price}
            onChange={setLensField}
            data-field-name="price"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">詳細說明</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={note}
            onChange={setLensField}
            data-field-name="note"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">交易地區</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={location}
            onChange={setLensField}
            data-field-name="location"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">照片網址</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={photoUrl}
            onChange={setLensField}
            data-field-name="photoUrl"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">拍賣連結</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={auctionUrl}
            onChange={setLensField}
            data-field-name="auctionUrl"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">聯絡方式</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={contact}
            onChange={setLensField}
            data-field-name="contact"
          />
        </div>
      </div>
    </form>
  );
};

export default LensForm;
