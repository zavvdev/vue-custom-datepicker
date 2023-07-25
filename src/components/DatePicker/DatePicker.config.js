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
  previewPickerHeader: "MMM yyyy",
  previewPickerDate: "D",
};

export const EVENTS = {
  onChange: "onChange",
  onChangeCalendar: "onChangeCalendar",
};

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
