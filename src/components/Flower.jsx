import React from 'react';

const Flower = ({ type }) => (
  <div className={`flower ${type}`}>
    {/* Hojas principales */}
    <div className={`flower__leafs ${type}__leafs`}>
      <div className="flower__leaf flower__leaf--1"></div>
      <div className="flower__leaf flower__leaf--2"></div>
      <div className="flower__leaf flower__leaf--3"></div>
      <div className="flower__leaf flower__leaf--4"></div>
      <div className="flower__white-circle"></div>

      {/* Luces alrededor */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={`light-${index + 1}`}
          className={`flower__light flower__light--${index + 1}`}
        ></div>
      ))}
    </div>

    {/* Tallo con hojas */}
    <div className="flower__line">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`line-leaf-${index + 1}`}
          className={`flower__line__leaf flower__line__leaf--${index + 1}`}
        ></div>
      ))}
    </div>

    {/* Hojas extra de pasto */}
    <div className="flower__grass flower__grass--1">
      <div className="flower__grass--top"></div>
      <div className="flower__grass--bottom"></div>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={`grass-leaf-${index + 1}`}
          className={`flower__grass__leaf flower__grass__leaf--${index + 1}`}
        ></div>
      ))}
      <div className="flower__grass__overlay"></div>
    </div>

    {/* Hojas y decoraciones adicionales */}
    <div className="grow-ans" style={{ '--d': '2.4s' }}>
      <div className="flower__g-right flower__g-right--1">
        <div className="leaf"></div>
      </div>
    </div>

    <div className="grow-ans" style={{ '--d': '2.8s' }}>
      <div className="flower__g-front">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`g-front-leaf-${index + 1}`}
            className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${index + 1}`}
          >
            <div className="flower__g-front__leaf"></div>
          </div>
        ))}
        <div className="flower__g-front__line"></div>
      </div>
    </div>
  </div>
);

export default Flower;
