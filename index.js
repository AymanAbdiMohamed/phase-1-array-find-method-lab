function findSuperbowlWin(records) {
  const winRecord = records.find(record => record.result === "W" && record.team === "Denver Broncos");
  return winRecord ? winRecord.year : undefined;
}
import { findSuperbowlWin } from './index.js';  // Adjust the name here
