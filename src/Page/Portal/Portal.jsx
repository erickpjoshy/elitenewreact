import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Checkbox, Space, TimePicker, Select } from 'antd';

import './portal.css';
import axios from 'axios';

//dor antd
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const Portal = () => {
  const [items, setItems] = useState({
    name: '',
    location: '',
    district: '',
    images: [],
    areaRange: '',
    status: 'Ongoing',
    bedroom: '',
    hall: '',
    kitchen: '',
    price: '',
  });

  const options = [
    { value: 'selectany', label: 'Select District', disabled: true },
    { value: 'alappuzha', label: 'Alappuzha' },
    { value: 'ernakulam', label: 'Ernakulam' },
    { value: 'idukki', label: 'Idukki' },
    { value: 'kannur', label: 'Kannur' },
    { value: 'kasaragod', label: 'Kasaragod' },
    { value: 'kollam', label: 'Kollam' },
    { value: 'kottayam', label: 'Kottayam' },
    { value: 'kozhikode', label: 'Kozhikode' },
    { value: 'malappuram', label: 'Malappuram' },
    { value: 'palakkad', label: 'Palakkad' },
    { value: 'pathanamthitta', label: 'Pathanamthitta' },
    { value: 'thiruvananthapuram', label: 'Thiruvananthapuram' },
    { value: 'thrissur', label: 'Thrissur' },
    { value: 'wayanad', label: 'Wayanad' },
  ];

  const handleChangeSelect = value => {
    // console.log(`selected ${value}`);
    setItems({ ...items, district: value });
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  //antd
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  //handle preview
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  //   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const onChange = (e, key) => {
    setItems({ ...items, [key]: e.target.value });
  };
  //   //handle change
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    let updatedImages = [];
    newFileList.forEach((file, index) => {
      if (file.response && file.response.url) {
        updatedImages[index] = file.response.url;
      } else if (file.url) {
        updatedImages[index] = file.url;
      }
    });
    setItems({ ...items, images: updatedImages });
  };

  const onClick = async () => {
    try {
      await axios.post('http://localhost:3000/listing', items);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(items);

  return (
    <div className="portal">
      <div className="portal-main">
        <div className="portal-main-left">
          <input
            type="text"
            placeholder="Name"
            onChange={e => onChange(e, 'name')}
          />
          <input
            type="text"
            placeholder="Location"
            onChange={e => onChange(e, 'location')}
          />
          <Select
            defaultValue="selectany"
            showSearch
            options={options}
            filterOption={filterOption}
            onChange={handleChangeSelect}
            className="select-box"
          />
          <input
            type="text"
            placeholder="Apartment Range in Sq.Ft"
            onChange={e => onChange(e, 'areaRange')}
          />
          <div className="bhk">
            <input
              type="number"
              placeholder="Bedroom"
              onChange={e => onChange(e, 'bedroom')}
            />
            <input
              type="number"
              placeholder="Hall"
              onChange={e => onChange(e, 'hall')}
            />
            <input
              type="number"
              placeholder="Kitchen"
              onChange={e => onChange(e, 'kitchen')}
            />
          </div>
          <input
            type="text"
            placeholder="Regular Price"
            onChange={e => onChange(e, 'price')}
          />
        </div>
        <div className="portal-main-right">
          <div className="right-inputs">
            <span>Images</span>
            <p>The First image will be the cover</p>

            <Upload
              action="http://localhost:3000/upload/image"
              // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              className="image-container"
            >
              {fileList.length >= 4 ? null : (
                <button
                  style={{
                    border: 0,
                    background: 'none',
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              )}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: 'none',
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: visible => setPreviewOpen(visible),
                  afterOpenChange: visible => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>
      </div>
      <div className="post-btn-container">
        <button className="portal-post-btn" onClick={onClick}>
          Create Listing
        </button>
      </div>
    </div>
  );
};

export default Portal;
