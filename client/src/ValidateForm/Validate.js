// constants
const emailRegExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const passwordRegExp =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const urlValidation = (url, arr) => {
  const regExp = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (url === "") return state_1();
  if (!regExp.test(url)) return state_2();
  if (arr.includes(url)) return state_3();
  return false;
};

//validations
export const validateTitle = (value, videoList) => {
  const video_titles = videoList.map((video) => video.title);
  if (value === "") return state_1();
  if (video_titles.includes(value)) return state_2();
  return false;
};
export const validateVideoLink = (url, videoList) => {
  const video_links = videoList.map((video) => video.videoLink);
  return urlValidation(url, video_links);
};
export const validateImgUrl = (url, videoList) => {
  const video_imgs = videoList.map((video) => video.videoImg);
  return urlValidation(url, video_imgs);
};
export const validateSelect = (value) => {
  if (value === "") return state_1();
  return false;
};
export const validateTextarea = (value, videoList) => {
  const video_desc = videoList.map((video) => video.desc);
  if (value === "") return state_1();
  if (video_desc.includes(value)) return state_2();
  return false;
};
export const validateUser = (value, users, userSession) => {
  const regExp = /[^ a-zA-Z0-9_-]/g;
  const { userEmail } = userSession;
  const user = users.filter(
    (user) => user.useremail === userEmail && user.username === value
  );

  if (value === "") return state_1();
  if (regExp.test(value)) return state_2();
  if (user.length === 0) return state_3();
  return false;
};
// category valitations
export const validateTitleCat = (value, catList) => {
  const titles = catList.map((cat) => cat.title);
  if (value === "") return state_1();
  if (titles.includes(value)) return state_2();
  return false;
};
export const validateColor = (value, catList) => {
  const colors = catList.map((cat) => cat.color);
  if (colors.includes(value)) return state_1();
  return false;
};
export const validateTextareaCat = (value, catList) => {
  const descriptions = catList.map((cat) => cat.desc);
  if (value === "") return state_1();
  if (descriptions.includes(value)) return state_2();
  return false;
};
export const validateUserCat = (value, users, userSession) => {
  const regex = /[^ a-zA-Z0-9_-]/g;
  const { userEmail } = userSession;
  const user = users.filter(
    (user) => user.useremail === userEmail && user.username === value
  );

  if (value === "") return state_1();
  if (regex.test(value)) return state_2();
  if (user.length === 0) return state_3();
  
  return false;
};
//category edit validations
export const validateTitleEdit = (value) => {
  if (value === "") return state_1();
  return false;
};
export const validateColorEdit = (value) => {
  if (value === "") return state_1();
  return false;
};
export const validateTextareaEdit = (value) => {
  if (value === "") return state_1();
  return false;
};
export const validateUserEdit = (value) => {
  if (value === "") return state_1();
  return false;
};

//register validation
export const validateUsername = (value, users) => {
  const regExp = /[^ a-zA-Z0-9_-]/g;
  const data = users.map((user) => user.username);
  if (value === "") return state_1();
  if (regExp.test(value)) return state_2();
  if (data.includes(value)) return state_3();
  return false;
};
export const validateUseremail = (value, users) => {
  const data = users.map((user) => user.useremail);
  if (value === "") return state_1();
  if (!emailRegExp.test(value)) return state_2();
  if (data.includes(value)) return state_3();
  return false;
};
export const validateConfirmEmail = (value, email) => {
  if (value === "") return state_1();
  if (value !== email.value) return state_2();
  return false;
};
export const validatePassword = (value, users) => {
  const data = users.map((user) => user.userpassword);
  if (value === "") return state_1();
  if (!passwordRegExp.test(value)) return state_2();
  if (data.includes(value)) return state_3();
  return false;
};

//login validation
export const validateLoginEmail = (value, users) => {
  const data = users.map((user) => user.useremail);
  if (value === "") return state_1();
  if (!emailRegExp.test(value)) return state_2();
  if (!data.includes(value)) return state_3();
  return false;
};
export const validateLoginPassword = (value, users) => {
  const data = users.map((user) => user.userpassword);
  if (value === "") return state_1();
  if (!passwordRegExp.test(value)) return state_2();
  if (!data.includes(value)) return state_3();
  return false;
};

const state_1 = () => {
  return { index: 0, value: true };
};
const state_2 = () => {
  return { index: 1, value: true };
};
const state_3 = () => {
  return { index: 2, value: true };
};
