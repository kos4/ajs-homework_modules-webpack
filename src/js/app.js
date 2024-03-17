import moment from 'moment';

moment.locale('ru');
console.log('app worked');
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').innerText = `Сегодня ${ moment().format('LLL') }`;
});