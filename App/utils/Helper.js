/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }
  return keyValuePairs.join('&');
}

const Helper = {
  objToQueryString,
};
export default Helper;
