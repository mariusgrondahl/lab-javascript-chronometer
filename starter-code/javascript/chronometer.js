class Chronometer {
  constructor () {
      this.interval = 0;
      this.currentTime = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.milliSeconds = 0;
      this.timestamp = 0;
    }

    startClick() {
      this.interval = setInterval(() => {
      return this.twoDigitsNumber(this.currentTime++);
      }, 1000);
    }

    setMinutes() {
      this.minutes =  Math.floor(this.currentTime / 60);
      this.minutes =  this.twoDigitsNumber(this.minutes);
      return this.minutes;
    }

    setSeconds() {
      this.seconds = this.currentTime % 60;
      this.seconds = this.twoDigitsNumber(this.seconds);
      return this.seconds;
    }



    getTime() {
      return this.currentTime;
    }

    twoDigitsNumber(value) {
      value % 10;
      Math.floor(value/10);
      let stringNumber = value.toString();

      if (stringNumber < 10) {
        stringNumber = "0" + stringNumber;
        return stringNumber;
      } else {
        return stringNumber;
      }
    }

    setTime() { 
      this.timestamp = this.setMinutes() + ":" + this.setSeconds();
    }

    stopClick() {
      clearInterval(this.interval);
    }

    resetClick() {
      this.currentTime = 0;
    }

}