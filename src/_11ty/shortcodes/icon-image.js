const Image = require('@11ty/eleventy-img');

async function iconImage (src, alt, classes) {
  let metadata = await Image(src, {
    widths: [50],
    formats: ['png'],
    urlPath: '/assets/img/',
    outputDir: '_site/assets/img/',
  });

  let data = metadata.png[metadata.png.length - 1];
  return `<img src="${data.url}" width="${data.width}" class="${classes}" height="${data.height}" alt="${alt}" loading="eager" decoding="async">`;
}

module.exports = iconImage;
