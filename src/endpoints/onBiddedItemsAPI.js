export function fetchOnBiddedItemsAPI(id) {
  console.log("API_ONBIDDED");
  const requestOptions = {
    method: "GET",
  };
  return fetch(`http://localhost:3000/getItemsYouBidded/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
