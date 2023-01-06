export const dateFormat = (date: string) => {
  let korDate = new Date(date);
  if (date === 'today') {
    korDate = new Date();
  }
  const year = korDate.getFullYear();
  const month = ('0' + (1 + korDate.getMonth())).slice(-2);
  const day = ('0' + korDate.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};
