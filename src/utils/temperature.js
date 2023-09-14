export const converttoFahrenheit=(kelvin)=>{
    const toCelsius=kelvin-273.15
    const toFahrenheit=(toCelsius*9/5)+32
    return Math.round(toFahrenheit)
  }