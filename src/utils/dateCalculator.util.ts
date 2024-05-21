export function dateCalculator(date: Date) {
  const now = new Date().getTime();
  const createdAt = new Date(date).getTime();
  const minutes = 1000 * 60;
  const subtractDate = now - createdAt;
  const subtractMinutes = Math.floor(subtractDate / minutes);
  const subtractHours = Math.floor(subtractDate / (minutes * 60));
  const subtractDays = Math.floor(subtractDate / (minutes * 60 * 24));
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const days = new Date(date).getDate();
  const OtherDates = `${year}. ${month}. ${days}`;

  if (subtractMinutes < 6) return '방금';
  if (subtractMinutes < 11) return '10분전';
  if (subtractHours < 1) return '30분전';
  if (subtractHours < 3) return '1시간전';
  if (subtractHours < 6) return '3시간전';
  if (subtractHours < 12) return '6시간전';
  if (subtractHours < 24) return '12시간전';
  if (subtractDays < 2) return '어제';
  if (subtractDays < 3) return '2일전';
  if (subtractDays < 4) return '3일전';

  return OtherDates;
}
