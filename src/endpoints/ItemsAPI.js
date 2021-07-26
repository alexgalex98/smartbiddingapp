export function fetchItemsAPI() {
  const requestOptions = {
    method: "GET",
  };
  console.log(requestOptions);
  return fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
