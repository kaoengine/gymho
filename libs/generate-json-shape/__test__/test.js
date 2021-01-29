const chunkAndParallelize = require("../utils/main");

const delay = (ms, key = null) =>
  new Promise(resolve => setTimeout(resolve, ms)).then(
    () => (key === null ? ms : key)
  );

const main = async () => {
  const runOperationAt = async operationIndex => {
    return await delay(5 * Math.random());
  };
  const OPERATION_COUNT = 100;
  const result = await chunkAndParallelize(OPERATION_COUNT, runOperationAt);
  if (result.length !== OPERATION_COUNT) {
    throw new Error(
      "Something unexpected happened " + `${result.length} ${OPERATION_COUNT}`
    );
  }
  console.log(`✅ Ok`);
};
(async () => {
  await main();
})();
