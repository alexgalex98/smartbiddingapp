export function bidForItemAPI(price, currentItem, currentUser) {
  console.log("inserting", price, currentItem, currentUser);
  return fetch(`http://localhost:3000/setBid/${currentUser}&${currentItem}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      price: price,
    }),
  }).then((data) => {
    console.log("dataAPI", data);
    return data;
  });
}
