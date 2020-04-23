var countClicks = 0;

var switchPlaces = function() {
  document.getElementById('from-to').classList.toggle('switch');
  countClicks++;
};

var temperatureCoverter = function() {
  var x = document.getElementById('inputValues').value;
  var output = document.getElementById('outputValues');

  if (countClicks % 2 == 0 || countClicks == 0) {
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
  } else if (countClicks % 2 == 1 || countClicks == 1) {
    from = document.getElementById('to').value;
    to = document.getElementById('from').value;
  }

  // -------- forgot to add value...--------
  if (!x) {
    output.innerHTML = 'Error!<br>Input missing or incorrect.';
  }
  // ----------- celcius to .... -----------
  // celcius to fahrenheit
  else if (from == '°C' && to == '°F') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x * 1.8 + 32) +
      '&nbsp;' +
      to;
  }
  // celcius to rankine
  else if (from == '°C' && to == '°R') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x * 1.8 + 32 + 459.67) +
      '&nbsp;' +
      to;
  }
  // celcius to reaumur
  else if (from == '°C' && to == '°Ré') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      0.8 * x +
      '&nbsp;' +
      to;
  }
  // celcius to kelvin
  else if (from == '°C' && to == 'K') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      273.15 +
      x +
      '&nbsp;' +
      to;
  }
  // ----------- fahrenheit to .... -----------
  // fahrenheit to celcius
  else if (from == '°F' && to == '°C') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 32) / 1.8 +
      '&nbsp;' +
      to;
  }
  // fahrenheit to rankine
  else if (from == '°F' && to == '°R') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (459.67 + x) +
      '&nbsp;' +
      to;
  }

  // fahrenheit to reaumur
  else if (from == '°F' && to == '°Ré') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 32) / 2.25 +
      '&nbsp;' +
      to;
  }
  // fahrenheit to kelvin
  else if (from == '°F' && to == 'K') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      ((x - 32) / 1.8 + 273.15) +
      '&nbsp;' +
      to;
  }
  // ----------- rankine to .... ------------
  // rankine to celcius
  else if (from == '°R' && to == '°C') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 32 - 459.67) / 1.8 +
      '&nbsp;' +
      to;
  }
  // rankine to fahrenheit
  else if (from == '°R' && to == '°F') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 459.67) +
      '&nbsp;' +
      to;
  }

  // rankine to reaumur
  else if (from == '°R' && to == '°Ré') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 32 - 459.67) / 2.25 +
      '&nbsp;' +
      to;
  }
  // rankine to kelvin
  else if (from == '°R' && to == 'K') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      x / 1.8 +
      '&nbsp;' +
      to;
  }
  // ----------- reaumur to .... ----------
  // reaumur to celcius
  else if (from == '°Ré' && to == '°C') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      x * 1.25 +
      '&nbsp;' +
      to;
  }
  // reaumur to fahrenheit
  else if (from == '°Ré' && to == '°F') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x * 2.25 + 32) +
      '&nbsp;' +
      to;
  }

  // reaumur to rankine
  else if (from == '°Ré' && to == '°R') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x * 2.25 + 32 + 459.67) +
      '&nbsp;' +
      to;
  }
  // reaumur to kelvin
  else if (from == '°Ré' && to == 'K') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x * 1.25 + 273.15) +
      '&nbsp;' +
      to;
  }
  // ----------- kelvin to .... ----------
  // kelvin to celcius
  else if (from == 'K' && to == '°C') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 273.15) +
      '&nbsp;' +
      to;
  }
  // kelvin to fahrenheit
  else if (from == 'K' && to == '°F') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x * 1.8 - 459.67) +
      '&nbsp;' +
      to;
  }

  // kelvin to rankine
  else if (from == 'K' && to == '°R') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      x * 1.8 +
      '&nbsp;' +
      to;
  }
  // kelvin to reaumur
  else if (from == 'K' && to == '°Ré') {
    output.innerHTML =
      x +
      '&nbsp;' +
      from +
      ' &nbsp; ' +
      '  =  ' +
      ' &nbsp; ' +
      (x - 273.15) * 0.8 +
      '&nbsp;' +
      to;
  }
  // -------- something else...--------
  // message if selected the same on the both sides
  else {
    output.innerHTML =
      "Can't convert " +
      ' &nbsp; ' +
      from +
      ' &nbsp; ' +
      ' to ' +
      ' &nbsp; ' +
      to;
  }
};

// ********** end of Uppgift 1  ******************
