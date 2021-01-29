const chunkAndParallelize = async (
  operationCount,
  runOperationAt = async operationIndex => { },
  chunkSize = 20
) => {
  const batchCount = Math.ceil(operationCount / chunkSize);
  let result = [];
  for (let i = 0; i < batchCount; i += 1) {
    const currentBatchOperations = [];
    for (let j = 0; j < chunkSize; j += 1) {
      const operationIndex = i * chunkSize + j;
      if (operationIndex >= operationCount) {
        break;
      }
      currentBatchOperations.push(runOperationAt(operationIndex));
    }
    const currentBatchOperationsResults = await Promise.all(
      currentBatchOperations
    );
    result = result.concat(currentBatchOperationsResults);
  }
  return result;
};

export default chunkAndParallelize