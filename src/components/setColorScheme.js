import React, { useState } from "react"
import Emoji from "../utils/Emoji";
import { hslToHex, hexToHSL } from "../utils/convertColor";

const SetColorScheme = () => {
  const defaultHslColorVal = {
    "hue": getComputedStyle(document.documentElement).getPropertyValue(`--default-color-h`),
    "sat": getComputedStyle(document.documentElement).getPropertyValue(`--default-color-s`).replace("%", ""),
    "lum": getComputedStyle(document.documentElement).getPropertyValue(`--default-color-l`).replace("%", "")
  }
  const defaultItalicVal = getComputedStyle(document.documentElement).getPropertyValue(`--font-ital-title`)
  const defaultWeightVal = getComputedStyle(document.documentElement).getPropertyValue(`--font-wght-title`)

  // DEFAULT COLOR
  // Hexa
  const [defaultHexColor, changeDefaultHexColor] = useState(hslToHex(defaultHslColorVal.hue, defaultHslColorVal.sat, defaultHslColorVal.lum));
  // hsl
  const [defaultHslColor_hue, changeDefaultHslColor_hue] = useState(defaultHslColorVal.hue);
  const [defaultHslColor_sat, changeDefaultHslColor_sat] = useState(defaultHslColorVal.sat);
  const [defaultHslColor_lum, changeDefaultHslColor_lum] = useState(defaultHslColorVal.lum);
  // DEFAULT FONT
  const [defaultFont_italic] = useState(defaultItalicVal);
  const [defaultFont_weight] = useState(defaultWeightVal);

  const setTheme = (e, hex, colorType) => {
    changeDefaultHexColor(hex)
    changeDefaultHslColor_hue(hexToHSL(hex).hue)
    changeDefaultHslColor_sat(hexToHSL(hex).sat)
    changeDefaultHslColor_lum(hexToHSL(hex).lum)

    document.documentElement.style.setProperty(`--${colorType}-color-h`, hexToHSL(hex).hue);
    document.documentElement.style.setProperty(`--${colorType}-color-s`, hexToHSL(hex).sat + '%');
    document.documentElement.style.setProperty(`--${colorType}-color-l`, hexToHSL(hex).lum + '%');
  }

  const setSky = (sky) => {
    const skyNbr = Number(sky);
    var newSat;
    var newLum;
    var gapLum = 5

    if (Math.sign(skyNbr) === -1) {
      // Enlève en pourcentage de la valeur de la saturation
      newSat = Number(defaultHslColor_sat) - (((skyNbr * -1) * Number(defaultHslColor_sat)) / 100)
      newLum = Number(defaultHslColor_lum) - (((skyNbr * -1) * gapLum) / 100)
    } else {
      // Ajoute en pourcentage sur la partie restante (55% -> 45) de la saturation
      newSat = Number(defaultHslColor_sat) + ((skyNbr * (100 - Number(defaultHslColor_sat))) / 100)
      newLum = Number(defaultHslColor_lum) + ((skyNbr * gapLum) / 100)
    }
    document.documentElement.style.setProperty(`--default-color-s`, newSat + "%")
    document.documentElement.style.setProperty(`--default-color-l`, newLum + "%")
    changeDefaultHexColor(hslToHex(defaultHslColorVal.hue, newSat, newLum))
  }

  const setTemperature = (temperature) => {
    const newHue = Number(defaultHslColor_hue) + (Number(temperature) / 10)
    document.documentElement.style.setProperty(`--default-color-h`, newHue)
    changeDefaultHexColor(hslToHex(newHue, defaultHslColorVal.sat, defaultHslColorVal.lum))
  }

  const setWind = (wind) => {
    const windNbr = Number(wind);
    const gapItal = 1;
    const gapWght = 400;
    var newItal
    var newWght

    if (Math.sign(windNbr) === -1) {
      newItal = Number(defaultFont_italic) - (((windNbr * -1) * gapItal) / 100)
      newWght = Number(defaultFont_weight) - (((windNbr * -1) * gapWght) / 100)
    } else {
      newItal = Number(defaultFont_italic) + ((windNbr * gapItal) / 100)
      newWght = Number(defaultFont_weight) + ((windNbr * gapWght) / 100)
    }

    document.documentElement.style.setProperty(`--font-ital-title`, newItal)
    document.documentElement.style.setProperty(`--font-wght-title`, newWght)
  }

  return (
    <>

      <div className="colorSchemePickerZone">

        <h2>Quelle météo</h2>
        <div className="hidden">
          <label htmlFor="colorSchemePicker">Color scheme</label>
          <input id="colorSchemePicker" type="color" value={defaultHexColor} onChange={(e) => setTheme(e, e.target.value, "default")} />
        </div>

        <label htmlFor="sliderTemperature" id="ital">Temperature <Emoji symbol="🌡" /></label>
        <input id="sliderTemperature" min="-200" max="200" className="slider" type="range" onChange={(e) => setTemperature(e.target.value)} />

        <label htmlFor="sliderSky" id="sky">Ciel <Emoji symbol="🌤" /></label>
        <input id="sliderSky" className="slider" min="-100" max="100" type="range" onChange={(e) => setSky(e.target.value)} />

        <label htmlFor="windTest" id="ital">Wind <Emoji symbol="🌬" /></label>
        <input id="windTest" className="slider" min="-100" max="100" type="range" onChange={(e) => setWind(e.target.value)} />
      </div>
    </>
  )
}

export default SetColorScheme;