
onmessage = (e) => {
  let newData = new Int32Array(2*e.data.chunkSize);
  for (let i = 0; i < e.data.chunkSize; i++) {
    newData[2*i] = i + e.data.start;
    newData[2*i + 1] = collatz(i + e.data.start);
  }
  postMessage(newData);
}

function collatz(k) {
  let out;
  if (k == 1) {
    out = 1;
  } else if (k%2==0) {
    out = 1 + collatz(k/2);
  } else {
    out = 1 + collatz((3*k+1)/2);
  }
  return out;
}