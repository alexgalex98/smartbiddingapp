export function fetchLastItemsAPI() {
  const requestOptions = {
    method: "GET",
  };
  console.log(requestOptions);
  return fetch("http://localhost:3000/lastItems", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
