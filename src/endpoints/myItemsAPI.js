export function fetchMyItemsAPI(id) {
  console.log("APIMY");
  const requestOptions = {
    method: "GET",
  };
  return fetch(`http://localhost:3000/getItemsYouCreated/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
