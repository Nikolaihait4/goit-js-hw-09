import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
let remainingTime;
startButton.addEventListener('click', () => {
  const selectedDate = flatpickr.parseDate(
    document.querySelector('#datetime-picker').value
  );
  updateTimer(selectedDate);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      Report.failure('Please choose a date in the future');
      return;
    }
    Report.success('Congratulation! Click on start!');
    // const startButton = document.querySelector('[data-start]');
    startButton.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimer(endDate) {
  const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  };

  function update() {
    const currentDate = new Date();
    const timeRemaining = endDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
  }

  const timerInterval = setInterval(update, 1000);
}
