module.exports = function(regCar, location) {

  var regNumList = regCar.split(",");

  var total = 0;

  for (var i = 0; i < regNumList.length; i++) {

    if (regNumList[i].startsWith(location)) {

      total++;
    }
  }
  return total;


};
