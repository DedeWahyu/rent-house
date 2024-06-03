const { DateTime } = require("luxon");

const getCurrentTime = () => {
  return DateTime.now().setZone("Asia/Jakarta");
};
const getFormatTime = () => {
  return DateTime.now().setZone("Asia/Jakarta").toFormat("yyyyMMddHHmmss");
};
module.exports = {
  getCurrentTime,
  getFormatTime,
};
