export default function iterateThroughObject(reportWithIterator) {
  // reportWithIterator is any iterable (in our case, an array)
  // Collect all names into an array:
  const names = [];
  for (const name of reportWithIterator) {
    names.push(name);
  }
  // Join them with " | ":
  return names.join(' | ');
}
