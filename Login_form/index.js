
let data = {};

let handleChange = (event) => {
  let { name, value } = event.target;
  data = { ...data, [name]: value };
  // console.log(data);
};

let handleClick = (event) => {
  event.preventDefault();
  console.log("submitted data", data);
};