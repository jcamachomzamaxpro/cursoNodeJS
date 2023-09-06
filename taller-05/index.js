let fs = require('fs');
let superagent = require('superagent');

let readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('No se pudo leer el archivo');
      resolve(data);
    });
  });
};

let writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('No se pudo escribir el archivo');
      resolve('success');
    });
  });
};

let getPictures = async (breed, numImg) => {
  try {
    console.log(`Breed: ${breed}`);

    let imageURLs = [];

    for (let i = 0; i < numImg; i++) {
      let imgResponse = await superagent.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );

      let img = imgResponse.body.message;
      imageURLs.push(img);
    }

    console.log(imageURLs);

    await writeFilePro(`./${breed}-img.txt`, imageURLs.join('\n'));
    console.log(`Random ${breed} dog images saved to file`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

let getEachImg = async () => {
  try {
    let data = await readFilePro(`${__dirname}/dog.txt`);
    let breeds = data
      .toString()
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    console.log('👍');

    for (let breed of breeds) {
      await getPictures(breed, 3);
    }

    console.log('Done');
  } catch (err) {
    console.log('ERROR');
  }
};
getEachImg();
