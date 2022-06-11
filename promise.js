const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  let theater = [];
  let moLen = [];
  let moCount = [];

  const p1 = await promiseTheaterIXX();
  const p2 = await promiseTheaterVGC();

  theater.push(...p1, ...p2);

  theater.filter((e) => {
    if (e.hasil == emotion) {
      moLen.push(e.hasil);
    }
  });

  moCount.push(moLen.length);

  return moCount;
};

module.exports = {
  promiseOutput,
};
