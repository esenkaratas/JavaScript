"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < sampleSize; i++) {
    const randomNumber = Math.floor(Math.random() * 6);
    valueCounts[randomNumber] += 1;
  }

  const results = [];
  for (const element of valueCounts) {
    const percentage = 100 * element / sampleSize;
    results.push(percentage.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (const element of sampleSizes) {
    console.log(runExperiment(element), element);
    
  }

}

main();
