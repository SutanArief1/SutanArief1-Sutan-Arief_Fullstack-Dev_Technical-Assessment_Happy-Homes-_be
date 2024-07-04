export function calculateDuration(start_date: Date, end_date: Date) {
  const start = new Date(start_date);
  const end = new Date(end_date);

  const durationMilliseconds = end.getTime() - start.getTime();

  if (durationMilliseconds < 0) {
    return '0 Jam 0 menit';
  }

  const durationMinutes = Math.floor(durationMilliseconds / (1000 * 60));
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  if (days > 0) {
    return `${days} Hari ${remainingHours} Jam ${minutes} menit`;
  } else {
    return `${hours} Jam ${minutes} menit`;
  }
}