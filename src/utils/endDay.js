export default function(date) {
  let result = new Date(date);
  result.setHours(24, 0, 0, 0);
  return result.getTime();
}
