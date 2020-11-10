const fs = require("fs");

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const sum = (a, b) => a + b;

const main = async () => {
  const buf = fs.readFileSync("lib.wasm");

  const importObject = {
    env: {
      sum,
    },
    wasi_unstable: {
      fd_write: () => {},
    },
  };

  const wasm = await WebAssembly.instantiate(new Uint8Array(buf), importObject);
  const lib = wasm.instance.exports;

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  const add1 = (a, b) => lib.add1(a, b);

  const result = add1(5, 37);
  console.log(result);
};

main();
