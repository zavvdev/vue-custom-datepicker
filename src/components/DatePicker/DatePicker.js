import { range } from "../../utils/general";
import {
  DATE_FORMATS,
  DAYS,
  EVENTS,
  MONTHS,
  YEARS_LIST_THRESHOLD,
} from "./DatePicker.config";
import { DateService } from "./services/DateService";

export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    enabledDates: {
      type: Array,
      default: () => [],
    },
    disabledDates: {
      type: Array,
      default: () => [],
    },
    format: {
      type: String,
      default: DATE_FORMATS.value,
    },
    previewFormat: {
      type: String,
      default: DATE_FORMATS.previewValue,
    },
    placeholder: {
      type: String,
      default: "Select date..",
    },
    loadingText: {
      type: String,
      default: "Loading.. please wait",
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    previewValue() {
      if (this.value) {
        return this.dateService.format(this.value, this.previewFormat);
      }
      return this.placeholder;
    },
    days() {
      return DAYS;
    },
    months() {
      return MONTHS;
    },
    years() {
      const currentYear = this.dateService.getCurrentYear();
      return range(
        currentYear - YEARS_LIST_THRESHOLD,
        currentYear + YEARS_LIST_THRESHOLD,
        1,
      );
    },
    currentPageDates() {
      return this.dateService.getCalendarPageDates(this.calendarPageValue);
    },
    selectedMonth() {
      return this.dateService.getDateMonth(this.calendarPageValue);
    },
    selectedYear() {
      return this.dateService.getDateYear(this.calendarPageValue);
    },
  },

  watch: {
    calendarPageValue(nextCalendarPageValue) {
      this.$emit(EVENTS.onChangeCalendar, nextCalendarPageValue);
    },
  },

  data() {
    const dateService = new DateService({
      format: this.format,
    });
    return {
      dateService,
      isOpen: false,
      calendarPageValue: dateService.getStartOfMonth(
        this.value || dateService.getToday(),
      ),
    };
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },

    onPrevMonth() {
      this.calendarPageValue = this.dateService.shiftCalendarMonth(
        this.calendarPageValue,
        "subtract",
      );
    },
    onNextMonth() {
      this.calendarPageValue = this.dateService.shiftCalendarMonth(
        this.calendarPageValue,
        "add",
      );
    },
    onChangeValue(nextValue) {
      if (this.closeOnSelect) {
        this.toggleOpen();
      }
      this.$emit(EVENTS.onChange, nextValue);
    },
    onChangeCalendarMonth(nextMonthNumber) {
      this.calendarPageValue = this.dateService.setDateMonth(
        this.calendarPageValue,
        nextMonthNumber,
      );
    },
    onChangeCalendarYear(nextYear) {
      this.calendarPageValue = this.dateService.setDateYear(
        this.calendarPageValue,
        nextYear,
      );
    },

    getCalendarDatePreview(date) {
      return this.dateService.format(date, DATE_FORMATS.previewPickerDate);
    },
    getToday() {
      return this.dateService.getToday();
    },

    isDateDisabled(date) {
      const dateMonth = this.dateService.getDateMonth(date);
      const calendarPageMonth = this.dateService.getDateMonth(
        this.calendarPageValue,
      );
      return (
        dateMonth !== calendarPageMonth ||
        this.disabledDates.includes(date) ||
        (this.enabledDates.length > 0 && !this.enabledDates.includes(date))
      );
    },
    isDateSelected(date) {
      return date === this.value;
    },
    isToday(date) {
      return this.dateService.getToday() === date;
    },
  },
};
