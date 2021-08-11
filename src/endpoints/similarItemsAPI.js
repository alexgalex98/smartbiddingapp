export function fetchSimilarItemsAPI(id) {
  console.log("APISIMILAR");
  const requestOptions = {
    method: "GET",
  };
  return fetch(`http://localhost:3000/similarCategory/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
