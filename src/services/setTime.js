export const setTime = (time) => {
  let date = new Date(time * 1000);
  return date.toLocalString();
};
export default setTime;
