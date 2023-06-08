import './Converter.scss'
import React, { useState } from 'react'
import checkHex from '../../Utils/checkHex';
import hexToRgb from '../../Utils/hexToRgb';

function Converter() {
  const [hexData, setHexData] = useState('');
  const [rgbData, setRgbData] = useState({
    inputValue: 'rgb( ... , ... , ... )',
    className: 'form',
    bgColor: { backgroundColor: '#34495e' }
  });

  const handleChange = (e) => {
    const { value } = e.target
    setHexData(value);

    if (value.length === 7) {
      if (checkHex(value)) {
        setRgbData({
          inputValue: hexToRgb(value),
          className: 'form',
          bgColor: { backgroundColor: value }
        })
      } else {
        setRgbData({
          inputValue: 'Ошибка!',
          className: 'form error',
          bgColor: { backgroundColor: '#e94b35' }
        })
      }
    }

    if (value.length > 7) {
      setRgbData({
        inputValue: 'Ошибка!',
        className: 'form error',
        bgColor: { backgroundColor: '#e94b35' }
      })
    }
    
    if (value === '') {
      setRgbData({
        inputValue: 'rgb(... , ... , ...)',
        className: 'form',
        bgColor: { backgroundColor: '#34495e' }
      })
    }
  }

  return (
    <form className={rgbData.className} style={rgbData.bgColor}>
      <div className="form__item-wrap hex">
        <label htmlFor="hex-input" className="form__label hex">HEX:</label>
        <input id="hex-input" type="text" className="form__input hex" value={hexData} onChange={handleChange} />
      </div>
      <div className="form__item-wrap rgb">
        <label htmlFor="rgb-input" className="form__label rgb">RGB:</label>
        <input id="rgb-input" type="text" className="form__input rgb" value={rgbData.inputValue} disabled />
      </div>
    </form>
  )
}

export default Converter