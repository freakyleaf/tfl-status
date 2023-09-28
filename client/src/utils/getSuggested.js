import didYouMean from 'didyoumean';

export default function getSuggested({
  item,
  items,
}) {
  if (!item || !items) return;
  return didYouMean(item, items);
}
