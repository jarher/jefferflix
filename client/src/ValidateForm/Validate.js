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
  } else {
    return false;
  }
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

export const validateColor = (value) => {
  
}