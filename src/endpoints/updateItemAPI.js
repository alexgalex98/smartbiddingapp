export const updateItemAPi = (
  id,
  name,
  category,
  description,
  condition,
  startprice,
  buynowprice,
  secondsleft
) => {
  console.log(
    id,
    name,
    category,
    description,
    condition,
    startprice,
    buynowprice,
    secondsleft,
    "APIIII"
  );
  return fetch(`http://localhost:3000/updateItem/${id}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prodname: name,
      category: category,
      description: description,
      condition_: condition,
      startprice: startprice,
      buynowprice: buynowprice,
      secondsleft: secondsleft,
    }),
  }).then((data) => {
    console.log(data);
    return data;
  });
};
