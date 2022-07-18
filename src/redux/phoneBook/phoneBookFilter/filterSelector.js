export const getFilteredItems = ({ contacts: { filter, items } }) => {
  if (!filter) {
    return items;
  }
  const newItems = items.filter(el => {
    const { name } = el;
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return newItems;
};
