export default function screenReaderSpokenArray(array) {
  if (array.length === 0) return '';
  return array.reduce((a, b, i, array) => a + (i < array.length - 1 ? ', ' : ', and ') + b);
}
