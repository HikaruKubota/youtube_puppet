exports.createDates = async items => {
  const dates = [];
  for (const item of items) {
    const href = await item.$('#meta > #title-wrapper > .title-and-badge > a');

    let data = {
      href: await (await href.getProperty('href')).jsonValue(),
    };
    dates.push(data);
  }
  return dates;
}
