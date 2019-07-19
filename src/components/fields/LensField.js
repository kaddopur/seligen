import React from 'react';
import { Form, Cascader } from 'antd';

const LensField = () => {
  const options = [
    {
      value: 'SIGMA',
      label: 'SIGMA',
      children: [
        {
          value: 'Contemporary',
          label: 'Contemporary',
          children: [
            { value: '17-70mm F2.8-4 DC MACRO OS HSM', label: '17-70mm F2.8-4 DC MACRO OS HSM' },
            { value: '18-200mm F3.5-6.3 DC MACRO OS HSM', label: '18-200mm F3.5-6.3 DC MACRO OS HSM' },
            { value: '18-300mm F3.5-6.3 DC MACRO OS HSM', label: '18-300mm F3.5-6.3 DC MACRO OS HSM' },
            { value: '100-400mm F5-6.3 DG OS HSM', label: '100-400mm F5-6.3 DG OS HSM' },
            { value: '150-600mm F5-6.3 DG OS HSM', label: '150-600mm F5-6.3 DG OS HSM' },
            { value: '16mm F1.4 DC DN', label: '16mm F1.4 DC DN' },
            { value: '30mm F1.4 DC DN', label: '30mm F1.4 DC DN' },
            { value: '56mm F1.4 DC DN', label: '56mm F1.4 DC DN' }
          ]
        },
        {
          value: 'Art',
          label: 'Art',
          children: [
            { value: '18-35mm F1.8 DC HSM', label: '18-35mm F1.8 DC HSM' },
            { value: '50-100mm F1.8 DC HSM', label: '50-100mm F1.8 DC HSM' },
            { value: '30mm F1.4 DC HSM', label: '30mm F1.4 DC HSM' },
            { value: '12-24mm F4 DG HSM', label: '12-24mm F4 DG HSM' },
            { value: '14-24mm F2.8 DG HSM', label: '14-24mm F2.8 DG HSM' },
            { value: '24-35mm F2 DG HSM', label: '24-35mm F2 DG HSM' },
            { value: '24-70mm F2.8 DG OS HSM', label: '24-70mm F2.8 DG OS HSM' },
            { value: '24-105mm F4 DG OS HSM', label: '24-105mm F4 DG OS HSM' },
            { value: '14mm F1.8 DG HSM', label: '14mm F1.8 DG HSM' },
            { value: '20mm F1.4 DG HSM', label: '20mm F1.4 DG HSM' },
            { value: '24mm F1.4 DG HSM', label: '24mm F1.4 DG HSM' },
            { value: '28mm F1.4 DG HSM', label: '28mm F1.4 DG HSM' },
            { value: '35mm F1.4 DG HSM', label: '35mm F1.4 DG HSM' },
            { value: '40mm F1.4 DG HSM', label: '40mm F1.4 DG HSM' },
            { value: '50mm F1.4 DG HSM', label: '50mm F1.4 DG HSM' },
            { value: '70mm F2.8 DG MACRO', label: '70mm F2.8 DG MACRO' },
            { value: '85mm F1.4 DG HSM', label: '85mm F1.4 DG HSM' },
            { value: '105mm F1.4 DG HSM', label: '105mm F1.4 DG HSM' },
            { value: '135mm F1.8 DG HSM', label: '135mm F1.8 DG HSM' },
            { value: '19mm F2.8 DN', label: '19mm F2.8 DN' },
            { value: '30mm F2.8 DN', label: '30mm F2.8 DN' },
            { value: '60mm F2.8 DN', label: '60mm F2.8 DN' }
          ]
        },
        {
          value: 'Sports',
          label: 'Sports',
          children: [
            { value: '60-600mm F4.5-6.3 DG OS HSM', label: '60-600mm F4.5-6.3 DG OS HSM' },
            { value: '70-200mm F2.8 DG OS HSM', label: '70-200mm F2.8 DG OS HSM' },
            { value: '120-300mm F2.8 DG OS HSM', label: '120-300mm F2.8 DG OS HSM' },
            { value: '150-600mm F5-6.3 DG OS HSM', label: '150-600mm F5-6.3 DG OS HSM' },
            { value: '500mm F4 DG OS HSM', label: '500mm F4 DG OS HSM' }
          ]
        },
        {
          value: 'Others',
          label: 'Others',
          children: [
            { value: '8-16mm F4.5-5.6 DC HSM', label: '8-16mm F4.5-5.6 DC HSM' },
            { value: '10-20mm F3.5 EX DC HSM', label: '10-20mm F3.5 EX DC HSM' },
            { value: '17-50mm F2.8 EX DC OS HSM', label: '17-50mm F2.8 EX DC OS HSM' },
            { value: '18-250mm F3.5-6.3 DC MACRO OS HSM', label: '18-250mm F3.5-6.3 DC MACRO OS HSM' },
            { value: '4.5mm F2.8 EX DC CIRCULAR FISHEYE HSM', label: '4.5mm F2.8 EX DC CIRCULAR FISHEYE HSM' },
            { value: 'APO 200-500mm F2.8 /400-1000mm F5.6 EX DG', label: 'APO 200-500mm F2.8 /400-1000mm F5.6 EX DG' },
            { value: 'APO 300-800mm F5.6 EX DG HSM', label: 'APO 300-800mm F5.6 EX DG HSM' },
            { value: '8mm F3.5 EX DG CIRCULAR FISHEYE', label: '8mm F3.5 EX DG CIRCULAR FISHEYE' },
            { value: '15mm F2.8 EX DG DIAGONAL FISHEYE', label: '15mm F2.8 EX DG DIAGONAL FISHEYE' },
            { value: 'MACRO 105mm F2.8 EX DG OS HSM', label: 'MACRO 105mm F2.8 EX DG OS HSM' },
            { value: 'APO MACRO 150mm F2.8 EX DG OS HSM', label: 'APO MACRO 150mm F2.8 EX DG OS HSM' },
            { value: 'APO MACRO 180mm F2.8 EX DG OS HSM', label: 'APO MACRO 180mm F2.8 EX DG OS HSM' }
          ]
        }
      ]
    },
    {
      value: 'SONY',
      label: 'SONY',
      children: [
        { label: 'FE 35mm F1.8', value: 'SEL35F18F' },
        { label: 'FE 600mm F4 GM OSS', value: 'SEL600F40GM' },
        { label: 'FE 200-600mm F5.6-6.3 G OSS', value: 'SEL200600G' },
        { label: 'FE 135mm F1.8 GM', value: 'SEL135F18GM' },
        { label: 'FE 400mm F2.8 GM OSS', value: 'SEL400F28GM' },
        { label: 'FE 24mm F1.4 GM', value: 'SEL24F14GM' },
        { label: 'E 18-135mm F3.5-5.6 OSS', value: 'SEL18135' },
        { label: 'FE 24-105mm F4 G OSS Lens', value: 'SEL24105G' },
        { label: 'FE 16-35mm F2.8 GM', value: 'SEL1635GM' },
        { label: 'FE 12-24mm F4 G', value: 'SEL1224G' },
        { label: 'FE 100-400mm G Master super-telephoto zoom lens', value: 'SEL100400GM' },
        { label: 'FE 100mm F2.8 STF GM OSS', value: 'SEL100F28GM' },
        { label: 'FE 85mm F1.8', value: 'SEL85F18' },
        { label: 'E 10-18mm F4 OSS', value: 'SEL1018' },
        { label: 'Vario-Tessar T* FE 16-35mm F4 ZA OSS', value: 'SEL1635Z' },
        { label: 'E PZ 16-50mm F3.5-5.6 OSS', value: 'SELP1650' },
        { label: 'Vario-Tessar T* E 16-70mm F4 ZA OSS', value: 'SEL1670Z' },
        { label: 'E 16mm F2.8', value: 'SEL16F28' },
        { label: 'E 18-55mm F3.5-5.6 OSS', value: 'SEL1855' },
        { label: 'E PZ 18-105mm F4 G OSS', value: 'SELP18105G' },
        { label: 'E 18-200mm F3.5-6.3 OSS', value: 'SEL18200' },
        { label: 'E 18–200mm F3.5–6.3 OSS LE', value: 'SEL18200LE' },
        { label: 'E PZ 18-200mm F3.5-6.3 OSS', value: 'SELP18200' },
        { label: 'E 20mm F2.8', value: 'SEL20F28' },
        { label: 'FE 24-240mm F3.5-6.3 OSS', value: 'SEL24240' },
        { label: 'FE 24-70mm F2.8 GM', value: 'SEL2470GM' },
        { label: 'Vario-Tessar T* FE 24-70mm F4 ZA OSS', value: 'SEL2470Z' },
        { label: 'Sonnar T* E 24mm F1.8 ZA', value: 'SEL24F18Z' },
        { label: 'FE 28-70mm F3.5-5.6 OSS', value: 'SEL2870' },
        { label: 'FE 28mm F2', value: 'SEL28F20' },
        { label: 'FE PZ 28-135mm F4 G OSS', value: 'SELP28135G' },
        { label: 'E 30mm F3.5 Macro', value: 'SEL30M35' },
        { label: 'Distagon T* FE 35mm F1.4 ZA', value: 'SEL35F14Z' },
        { label: 'E 35mm F1.8 OSS', value: 'SEL35F18' },
        { label: 'Sonnar T* FE 35mm F2.8 ZA', value: 'SEL35F28Z' },
        { label: 'Planar T* FE 50mm F1.4 ZA', value: 'SEL50F14Z' },
        { label: 'E 50mm F1.8 OSS', value: 'SEL50F18' },
        { label: 'FE 50mm F1.8', value: 'SEL50F18F' },
        { label: 'FE 50mm F2.8 Macro', value: 'SEL50M28' },
        { label: 'E 55-210mm F4.5-6.3 OSS', value: 'SEL55210' },
        { label: 'Sonnar T* FE 55mm F1.8 ZA', value: 'SEL55F18Z' },
        { label: 'FE 70-200mm F4 G OSS', value: 'SEL70200G' },
        { label: 'FE 70-300mm F4.5-5.6 G OSS', value: 'SEL70300G' },
        { label: 'FE 85mm F1.4 GM', value: 'SEL85F14GM' },
        { label: 'FE 90mm F2.8 Macro G OSS', value: 'SEL90M28G' },
        { label: '1.4x Teleconverter Lens', value: 'SEL14TC' },
        { label: '2x Teleconverter Lens', value: 'SEL20TC' }
      ]
    },
    {
      value: 'Panasonic',
      label: 'Panasonic',
      children: [
        { label: 'LEICA DG SUMMILUX 15mm / F1.7 ASPH.', value: 'H-X015' },
        { label: 'LUMIX G 42.5mm / F1.7 ASPH. / POWER O.I.S.', value: 'H-HS043' }
      ]
    }
  ];

  return (
    <Form.Item label="Lens">
      <Cascader options={options} placeholder="Please select" />
    </Form.Item>
  );
};

export default LensField;
