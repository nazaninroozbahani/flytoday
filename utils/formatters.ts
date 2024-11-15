import { translations as t } from "@/utils/translations";

export function getPersianDate(datetime: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const converted = new Date(datetime).toLocaleDateString("fa-IR", options);
  return `${converted}`;
}

export function getPersianDateAndWeekDay(datetime: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  const converted = new Date(datetime).toLocaleDateString("fa-IR", options);
  return `${converted}`;
}

export function getTime(dateTime: string) {
  const pointDateTime = new Date(dateTime);
  return `${pointDateTime.getHours()}:${
    (pointDateTime.getMinutes() < 10 ? "0" : "") + pointDateTime.getMinutes()
  }`;
}

export function getDatesDiffs(start: string, end: string) {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const difference = endTime.getTime() - startTime.getTime();
  const hours = Math.floor(difference / (1000 * 60 * 60)); // Calculate hours
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes

  return `${hours > 0 ? hours + " " + t.hour : ""} ${
    hours > 0 && minutes > 0 ? " " + t.and + " " : ""
  }${minutes > 0 ? minutes + " " + t.minute : ""} `;
}

export function getPriceFormat(price: number) {
  return new Intl.NumberFormat().format(price);
}
