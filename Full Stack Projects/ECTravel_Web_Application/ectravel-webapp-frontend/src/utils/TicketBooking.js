export const calcDuration = (
  pickUpDate,
  dropDate,
  pickUpTime,
  dropTime,
  duration,
  handleSetDuration
) => {
  let ddDue = 0;
  let hourDue = 0;
  let minuteDue = 0;

  let [year, month, date] = pickUpDate.split("-");
  let pickUpYear = Number(year);
  let pickUpMonth = Number(month);
  let pickUpDD = Number(date);

  [year, month, date] = dropDate.split("-");
  let dropYear = Number(year);
  let dropMonth = Number(month);
  let dropDD = Number(date);

  let [hour, minute] = pickUpTime.split(":");
  let pickUpHour = Number(hour);
  let pickUpMinute = Number(minute);

  [hour, minute] = dropTime.split(":");
  let dropHour = Number(hour);
  let dropMinute = Number(minute);

  ddDue = dropDD - pickUpDD;
  if (ddDue === 0) {
    let pickUpHr = pickUpHour;
    let pickUpMin = pickUpMinute;
    if (pickUpMin !== 0) {
      pickUpHr++;
      pickUpMin = 60 - pickUpMin;
    }
    hourDue = dropHour - pickUpHr;
    minuteDue = pickUpMin + dropMinute;
    if (minuteDue >= 60) {
      minuteDue -= 60;
      hourDue++;
    }
  } else if (ddDue === 1) {
    let dayOneHour = 0;
    let dayOneMinute = 0;
    let dayTwoHour = dropHour;
    let dayTwoMinute = dropMinute;

    let pickUpHr = pickUpHour;

    if (pickUpMinute !== 0) {
      pickUpHr++;
      dayOneMinute = 60 - pickUpMinute;
    }
    dayOneHour = 24 - pickUpHr;
    hourDue = dayOneHour + dayTwoHour;
    minuteDue = dayOneMinute + dayTwoMinute;
    if (minuteDue >= 60) {
      minuteDue -= 60;
      hourDue++;
    }
    ddDue--;
  } else {
    let dayOneHour = 0;
    let dayOneMinute = 0;
    let dayTwoHour = dropHour;
    let dayTwoMinute = dropMinute;

    let pickUpHr = pickUpHour;

    if (pickUpMinute !== 0) {
      pickUpHr++;
      dayOneMinute = 60 - pickUpMinute;
    }
    dayOneHour = 24 - pickUpHr;
    hourDue = dayOneHour + dayTwoHour;
    minuteDue = dayOneMinute + dayTwoMinute;
    if (minuteDue >= 60) {
      minuteDue -= 60;
      hourDue++;
    }
    ddDue--;
    if (hourDue >= 24) {
      ddDue += (hourDue - (hourDue % 24)) / 24;
      hourDue = hourDue % 24;
    }
  }
  handleSetDuration({
    ...duration,
    hourDue: hourDue,
    minuteDue: minuteDue,
    ddDue: ddDue,
  });
};

export const monthNoToMonthStr = (monthNo) => {
  monthNo = Number(monthNo);
  switch (monthNo) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "";
  }
};