export default function screenReaderSpokenArray(array) {
  return array.reduce((a, b, i, array) => a + (i < array.length - 1 ? ', ' : ', and ') + b);
}
