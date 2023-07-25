export const IO_DATE_FORMATS = [
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "YYYY-DD-MM",
  "MM-DD-YYYY",

  "YYYY/MM/DD",
  "DD/MM/YYYY",
  "YYYY/DD/MM",
  "MM/DD/YYYY",
];

export const DEFAULT_IO_DATE_FORMAT = IO_DATE_FORMATS[0];

export const DATE_FORMATS = {
  value: DEFAULT_IO_DATE_FORMAT,
  previewValue: IO_DATE_FORMATS[7],
  previewPickerDate: "D",
};

export const EVENTS = {
  onChange: "onChange",
  onChangeCalendar: "onChangeCalendar",
};

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const MONTHS = [
  {
    label: "Jan",
    value: 1,
  },
  {
    label: "Feb",
    value: 2,
  },
  {
    label: "Mar",
    value: 3,
  },
  {
    label: "Apr",
    value: 4,
  },
  {
    label: "May",
    value: 5,
  },
  {
    label: "Jun",
    value: 6,
  },
  {
    label: "Jul",
    value: 7,
  },
  {
    label: "Aug",
    value: 8,
  },
  {
    label: "Sep",
    value: 9,
  },
  {
    label: "Oct",
    value: 10,
  },
  {
    label: "Nov",
    value: 11,
  },
  {
    label: "Dec",
    value: 12,
  },
];

export const YEARS_LIST_THRESHOLD = 50;
