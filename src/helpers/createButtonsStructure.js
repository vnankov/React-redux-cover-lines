export const createButtonsStructure = (length) => {
  let  arrayOfNewStructure = [];
  for (let i = 0; i < length; i++) {
    arrayOfNewStructure.push({
      id: i,
      selected: false,
      disabled: false
    });
  }

  return arrayOfNewStructure;
};
