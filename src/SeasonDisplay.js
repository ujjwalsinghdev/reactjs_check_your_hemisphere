import "./SeasonDisplay.css"
import React from "react"
import Clock from './Clock'

const seasonConfig = {
  summer: {
    text: "You are now in Northern Hemisphere of the Earth. Its hot here.",
    iconName: "sun"
  },
  winter: {
    text: "You are now in Southern Hemisphere of the Earth. Its cold here.",
    iconName: "snowflake"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"
  } else {
    return lat > 0 ? "winter" : "summer"
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(0, new Date().getMonth())

  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} massive icon`}></i>
    <h1> <Clock></Clock></h1>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} massive icon`}></i>
    </div>
  )
}

export default SeasonDisplay
