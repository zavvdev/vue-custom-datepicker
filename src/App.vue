<!--
  value and other dates that you pass to picker
  should be exact same format as the `format` prop
  you passing to picker.
  Available formats in DatePicker.config.js@IO_DATE_FORMATS
-->

<template>
  <div id="app">
    <DatePicker
      :value="this.date"
      :enabledDates="this.dates"
      @onChange="change"
      @onChangeCalendar="changeCalendar"
      format="YYYY-MM-DD"
    />
 </div>
</template>

<script>
import DatePicker from "./components/DatePicker/DatePicker.vue";

export default {
  data() {
    return {
      date: "2023-07-24",
      dates: ["2023-07-24", "2023-07-25", "2023-07-26", "2023-07-27"],
    };
  },
  methods: {
    change(e) {
      console.log("onChange:", e);
      this.date = e;
    },
    changeCalendar(nextMonth) {
      console.log("changeCalendar:", nextMonth);
    }
  },
  components: { DatePicker }
};
</script>