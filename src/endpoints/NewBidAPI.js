import React, { Fragment, useState } from "react";

export const NewBidAPI = (
  name,
  category,
  description,
  condition,
  startPrice,
  buyNowPrice,
  bidDuration,
  image,
  created_by
) => {
  //console.log("insertin", name, category);
  console.log("images path", image, category);
  return fetch("http://localhost:3000/newBid", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      category: category,
      description: description,
      condition: condition,
      startPrice: startPrice,
      buyNowPrice: buyNowPrice,
      bidDuration: bidDuration,
      image: image,
      created_by: created_by,
    }),
  }).then((data) => {
    console.log(data);
    return data;
  });
};
