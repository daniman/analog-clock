export default (config = {
  rings: 2,
  ticks: [
    { value: '13', label: '1' },
    { value: '14', label: '2' },
    { value: '15', label: '3' },
    { value: '16', label: '4' },
    { value: '17', label: '5' },
    { value: '18', shade: 'light', label: 'Dusk' },
    { value: '19', shade: 'light', label: '7' },
    { value: '20', shade: 'dark', label: '8' },
    { value: '21', shade: 'dark', label: '9' },
    { value: '22', shade: 'dark', label: '10' },
    { value: '23', shade: 'dark', label: '11' },
    { value: '24', shade: 'dark', label: 'Midnight' },
    { value: '01', shade: 'dark', label: '1', flip: true },
    { value: '02', shade: 'dark', label: '2', flip: true },
    { value: '03', shade: 'dark', label: '3', flip: true },
    { value: '04', shade: 'dark', label: '4', flip: true },
    { value: '05', shade: 'dark', label: '5', flip: true },
    { value: '06', shade: 'light', label: 'Dawn', flip: true },
    { value: '07', shade: 'light', label: '7', flip: true },
    { value: '08', label: '8', flip: true },
    { value: '09', label: '9', flip: true },
    { value: '10', label: '10', flip: true },
    { value: '11', label: '11', flip: true },
    { value: '12', label: 'Noon' }
  ],
  seconds: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  markers: [
    {
      label: 'Greenwich Mean Time',
      timezone: 'Etc/GMT-0'
    },
    {
      label: 'International Date Line',
      timezone: 'Etc/GMT-0',
      type: 'dashed',
      opposite: true
    }
  ],
  hands: [
    {
      label: 'San Francisco',
      timezone: 'US/Pacific'
    },
    {
      label: 'Helsinki',
      timezone: 'Europe/Helsinki'
    },
    {
      label: 'Bangkok',
      timezone: 'Asia/Bangkok'
    },
    {
      label: 'Boston',
      timezone: 'US/Eastern'
    },
    {
      label: 'Aguascalientes',
      timezone: 'America/Mexico_City'
    },
    {
      label: 'Lagos',
      timezone: 'Africa/Lagos'
    },
    {
      label: 'Melbourne',
      timezone: 'Australia/Melbourne'
    },
    {
      label: 'Amsterdam',
      timezone: 'Europe/Oslo'
    },
    {
      label: 'Brisbane',
      timezone: 'Australia/Brisbane'
    }
  ]
});
