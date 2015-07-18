export function getHistoryData () {
  let saved = window.localStorage.getItem('history-data');
  if(saved) {
    return JSON.parse(saved);
  }
  return {};
}

export function setHistoryData (historyData) {
  window.localStorage.setItem('history-data', JSON.stringify(historyData));
}
