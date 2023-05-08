export const validateTitle = (title) => {
  if (title !== "") {
    return true;
  } else {
    return false;
  }
};
export const validateVideoLink = (url) => {
  const regExp = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  return regExp.test(url);
};
export const validateImgUrl = (url) => {
  const regExp = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  return regExp.test(url);
};
export const validateSelect = (value) => {
  if (value !== "") {
    return true;
  }
  return false;
};
export const validateTextarea = (value) => {
  const regex = /\w/g;
  return regex.test(value);
};
export const validateUser = (value) => {
  if (value.length === 0) {
    return false;
  } else {
    const regex = /[^ a-zA-Z0-9_-]/g;
    return !regex.test(value);
  }
};
// category valitations
export const validateTitleCat = (value, catList) => {
  const titles = catList.map(cat => cat.title);
  if (value === "") {
    return { index: 0, value: true };
  }
  if (titles.includes(value)) {
    return { index: 1, value: true };
  }
  return false;
};
export const validateColor = (value, catList) => {
  const colors = catList.map(cat => cat.color);
  if (colors.includes(value)) {
    return { index: 0, value: true };
  }
  return false;
};
export const validateTextareaCat = (value, catList) => {
  const descriptions = catList.map(cat => cat.desc);
  if (value === "") {
    return { index: 0, value: true };
  }
  if (descriptions.includes(value)) {
    return { index: 1, value: true };
  }
  return false;
};
export const validateUserCat = (value) => {
  const regex = /[^ a-zA-Z0-9_-]/g;
  if (value === "") {
    return { index: 0, value: true };
  }
  if (regex.test(value)) {
    return { index: 1, value: true };
  }
  return false;
};
