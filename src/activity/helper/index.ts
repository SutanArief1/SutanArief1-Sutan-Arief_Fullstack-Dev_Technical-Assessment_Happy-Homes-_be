export function calculateDuration(startTime: string, endTime: string) {
  const [startHours, startMinutes] = startTime.split(':').map(Number);
  const [endHours, endMinutes] = endTime.split(':').map(Number);

  const startDate = new Date(0, 0, 0, startHours, startMinutes);
  const endDate = new Date(0, 0, 0, endHours, endMinutes);
  console.log(startDate.getTime());
  console.log(endDate.getTime());
  
  let difference = endDate.getTime() - startDate.getTime();

  if (difference < 0) {
    difference += 24 * 60 * 60 * 1000;
  }  

  const hours = Math.floor(difference / 1000 / 60 / 60);
  const minutes = Math.floor((difference / 1000 / 60) % 60);

  return `${hours} Jam ${minutes} menit`
}