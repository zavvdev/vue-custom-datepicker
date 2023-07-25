<template>
  <div class="root">
    <button
      v-on:click="toggleOpen" 
      :class="['trigger', { 'fullWidth': this.fullWidth }]"
    >
      {{ previewValue }}
      <div v-if="this.isOpen">x</div>
      <div v-else>📅</div>
    </button>
    <div v-if="this.isOpen" class="picker">
      <div class="picker-head">
        <button v-on:click="onPrevMonth" :disabled="this.isLoading">
          {{ '<' }}
        </button>
        {{ previewPickerHeaderDate }}
        <button v-on:click="onNextMonth" :disabled="this.isLoading">
          {{ '>' }}
        </button>
      </div>
      <div class="picker-content">
        <div v-if="this.isLoading">
          <div class="picker-placeholder-text">
            {{ this.loadingText }}
          </div>
        </div>
        <div v-else class="picker-content-wrap">
          <div class="picker-days">
            <div v-for="day in daysOfWeek">
              {{ day }}
            </div>
          </div>
          <div class="picker-dates">
            <button
              v-for="date in currentPageDates"
              v-on:click="() => onChangeValue(date)"
              :key="date"
              :disabled="isDateDisabled(date)"
              :class="{
                'today': isToday(date),
                'disabled': isDateDisabled(date),
                'selected': isDateSelected(date),
              }"
            >
              {{ getCalendarDatePreview(date) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./DatePicker"></script>
<style scoped src="./DatePicker.css"></style>