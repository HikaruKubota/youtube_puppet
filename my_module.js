const puppeteer = require('puppeteer');

exports.create_datas = async items => {

  const datas = [];
  for (const item of items) {
    const href = await item.$('#meta > #title-wrapper > .title-and-badge > a');

    let data = {
      href: await (await href.getProperty('href')).jsonValue(),
    };
    datas.push(data);
  }
  return datas;
}
