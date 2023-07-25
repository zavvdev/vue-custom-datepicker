import { DATE_FORMATS, DAYS, EVENTS } from "./DatePicker.config";
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
    previewPickerHeaderDateFormat: {
      type: String,
      default: DATE_FORMATS.previewPickerHeader,
    },
    previewPickerDateFormat: {
      type: String,
      default: DATE_FORMATS.previewPickerDate,
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
    previewPickerHeaderDate() {
      return this.dateService.format(
        this.calendarPageValue,
        this.previewPickerHeaderDateFormat,
      );
    },
    daysOfWeek() {
      return DAYS;
    },
    currentPageDates() {
      return this.dateService.getCalendarPageDates(this.calendarPageValue);
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

    getCalendarDatePreview(date) {
      return this.dateService.format(date, this.previewPickerDateFormat);
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
