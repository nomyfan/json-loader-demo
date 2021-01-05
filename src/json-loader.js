module.exports = function (source) {
  console.log("running json-loader");
  return "export default " + source;
};
