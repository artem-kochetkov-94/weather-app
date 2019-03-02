export default function(date) {
  let result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result.getTime();
}
