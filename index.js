// Створити функцію конструктор для Cattle(brand, maxVolume, minVolume)
// Властивості:
// brand
// maxVolume
// minVolume
// currentVolume = 0
// isOn = false
// Методи:
// addWater(value) //налий води
// makeTea(value)  //відлий воду
// turnOn()  //кип'яти

/**
 *
 * @param {string} brand
 * @param {number} maxVolume
 * @param {number} minVolume
 */
function Cattle(brand, maxVolume, minVolume) {
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.minVolume = minVolume;
  this.currentVolume = 0;
  this.isOn = false;

  this.addWater = function (value) {
    if (
      this.currentVolume + value >= 0 &&
      this.currentVolume + value <= this.maxVolume &&
      value > 0
    ) {
      return (this.currentVolume += value);
    }
    return false;
  };
  this.makeTea = function (value) {
    if (this.currentVolume - value >= 0 && value > 0) {
      return this.currentVolume - value;
    }
    return false;
  };
  this.turnOn = function () {
    if (this.isOn === false) {
      return (this.isOn = true);
    }
    return this.isOn;
  };
}

const cat = new Cattle("samsung", 1500, 200);
console.log(cat.addWater(500));
console.log(cat.makeTea(null));
console.log(cat.turnOn());
console.log(cat);
