import moment from "moment";
import { DEFAULT_IO_DATE_FORMAT } from "../DatePicker.config";

export class DateService {
  /**
   * @param {{
   *  format: string;
   * }} param0
   */
  constructor({ format }) {
    this._f = format || DEFAULT_IO_DATE_FORMAT;
  }

  /**
   * @param {string} date
   * @param {string} format
   * @returns {string}
   */
  format(date, format = this._f) {
    return moment.utc(date, this._f).format(format);
  }

  /**
   * @param {string} baseDate
   * @returns {Array<string>}
   */
  getCalendarPageDates(baseDate) {
    const calendar = [];

    const date = moment.utc(baseDate, this._f);
    const startDay = date.clone().startOf("month").startOf("isoWeek");
    const endDay = date.clone().endOf("month").endOf("isoWeek");

    let entryDate = startDay.clone().subtract(1, "day");

    while (entryDate.isBefore(endDay, "day")) {
      calendar.push(entryDate.add(1, "day").clone().format(this._f));
    }

    return calendar;
  }

  /**
   * @returns {string}
   */
  getToday() {
    return moment().format(this._f);
  }

  /**
   * @returns {number}
   */
  getCurrentYear() {
    return moment().year();
  }

  /**
   * @param {string} date
   * @returns {string}
   */
  getStartOfMonth(date) {
    return moment.utc(date, this._f).set("date", 1).format(this._f);
  }

  /**
   * @param {string} date
   * @param {'subtract' | 'add'} method
   * @returns {string}
   */
  shiftCalendarMonth(date, method) {
    const methodsMap = {
      subtract: "subtract",
      add: "add",
    };
    return moment
      .utc(date, this._f)
      [methodsMap[method]](1, "month")
      .set("date", 1)
      .format(this._f);
  }

  /**
   * @param {string} date
   * @returns {number}
   */
  getDateMonth(date) {
    return moment.utc(date, this._f).month() + 1;
  }

  /**
   * @param {string} date
   * @param {number} monthNumber
   * @returns {string}
   */
  setDateMonth(date, monthNumber) {
    return moment
      .utc(date, this._f)
      .set("month", monthNumber - 1)
      .format(this._f);
  }

  /**
   * @param {string} date
   * @returns {number}
   */
  getDateYear(date) {
    return moment.utc(date, this._f).year();
  }

  /**
   * @param {string} date
   * @param {number} year
   * @returns {string}
   */
  setDateYear(date, year) {
    return moment.utc(date, this._f).set("year", year).format(this._f);
  }
}
