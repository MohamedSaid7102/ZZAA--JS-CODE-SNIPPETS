// Get Date as a formated string
const getCurrentDate = (date = new Date(), format = 12) => {
  const handleHourFormat = (hour, form = format) => {
    return form === 24 ? hour : hour > 12 ? hour - 12 : hour;
  };

  const now = new Date(date);
  const day = `${now.getDate()}`.padStart(2, '0');
  const month = `${now.getMonth()}`.padStart(2, '0');
  const year = now.getFullYear();
  const hour = `${now.getHours()}`.padStart(2, '0');
  const min = `${now.getMinutes()}`.padStart(2, '0');
  return `${day}/${month}/${year}, ${handleHourFormat(hour)}:${min}`;
};
