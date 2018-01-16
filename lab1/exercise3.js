function isWeekend() {
  const todayDate = new Date();
  const day = todayDate.getDay();

  const week = ["weekend", "weekday"];
  return week[day % 6];
}
console.log(isWeekend());
