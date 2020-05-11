import React from "react"

const SetColorScheme = () => {

  const setTheme = (H, inputType) => {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length === 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length === 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta === 0)
      h = 0;
    else if (cmax === r)
      h = ((g - b) / delta) % 6;
    else if (cmax === g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
      h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    document.documentElement.style.setProperty(`--${inputType}-color-h`, h);
    document.documentElement.style.setProperty(`--${inputType}-color-s`, s + '%');
    document.documentElement.style.setProperty(`--${inputType}-color-l`, l + '%');
  }

  return (
    <>
      <div className="colorScheme">
        <div className="item primaryColor-light"></div>

        <div className="item primaryColor-dark"></div>
        <div className="item primaryColor-triade1"></div>
        <div className="item primaryColor">
          <input type="color" onChange={(e) => setTheme(e.target.value, "primary")} />
        </div>
        <div className="item primaryColor-triade2"></div>
        <div className="item primaryColor-complementary"></div>
      </div>

    </>
  )
}

/*
const inputs = ['primary', 'secondary'];

inputs.forEach((inputType) => {
  document.querySelector(`#${inputType}-color-input`)
    .addEventListener('change', (e) => {
      setTheme(e.target.value, inputType)
    });
});
*/
export default SetColorScheme;