import React from "react"

import countdownStyles from "src/static/countdown.module.scss"

const Countdown = () => {
    var x = setInterval(function() {
    var countDownDate = new Date(Date.UTC(2020, 8, 15, 16));
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "NOW";
    }
  }, 1000);

  return (
    <div class={countdownStyles.countdownStyles}>
      <h1 class={countdownStyles.countdownTitle}>The Story Begins</h1>
      <p id="countdown" class={countdownStyles.countdownTime}></p>        
    </div>
  )
}

export default Countdown
