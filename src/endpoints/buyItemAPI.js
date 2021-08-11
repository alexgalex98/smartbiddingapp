export function buyItemAPI(currentItem, currentUser) {
  console.log("inserting", currentItem, currentUser);
  return fetch(`http://localhost:3000/buyItem/${currentUser}&${currentItem}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
  }).then((data) => {
    console.log("dataAPI", data);
    return data;
  });
}
