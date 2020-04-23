///////////////////////////////////////////

// IIFE function in jQuery
(function($) {
  var url = 'https://api.dryg.net/dagar/v2.1/2018?callback';

  $.getJSON(url).done(function(data) {
    var year, week, day, date, nameday, dateNow, jsonDate;

    console.log(data);

    //get the day(number) and use it as an index in the weekdays array
    var dayNum = Number(moment().format('d'));

    //Manually created format (d,m,y) to make the output in swedish and in the right order
    var d = Number(moment().format('DD'));
    var m = Number(moment().format('MM'));
    var y = moment().format('YYYY');

    var months = [
      'Januari',
      'Februari',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktomber',
      'November',
      'December'
    ];
    var weekdays = [
      'Måndag',
      'Tisdag',
      'Onsdag',
      'Tursdag',
      'Fredag',
      'Lördag',
      'Söndag'
    ];

    //Looping over the 356 items of JSON data.dagar
    for (i in data.dagar) {
      //year
      year = y;
      //week
      week = Number(data.dagar[i].vecka);
      //date
      date = d;
      //day
      day = weekdays[dayNum - 1];
      //moth
      month = months[m - 1];
      //nameday
      nameday = data.dagar[i].namnsdag.join(' & ');

      // current date, exept the year to match the JSON year
      dateNow = moment().format('2018-MM-DD');
      // JSON date
      jsonDate = data.dagar[i].datum;

      //Show the JSON item that matches the current date
      if (dateNow == jsonDate) {
        //show year
        $('.year').text(year);
        $('.week').text('v.' + week);
        $('.day').text(day);
        $('.date').text(date);
        $('.month').text(month);

        //show the nameday if there is one
        if (data.dagar[i].namnsdag.length > 0) {
          $('.nameday').text(nameday);
        }
        //change the style to red if is sonday or a holiday
        if (dayNum === 7 || data.dagar[i].helgdag) {
          $('.date').css({ color: 'red' });
          $('.day').css({ color: 'red' });
        }
      }
    }
  });
})($);
