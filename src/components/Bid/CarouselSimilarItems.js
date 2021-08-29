import Carousel from "react-elastic-carousel";
import SimilarCard from "./similarCard";
import SimilarCardList from "./similarCardList";
import "../../styles/CarouselSimilarItems.css";

const CarouselSimilarItems = ({ items }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="carouselSimilarDiv">
      <div className="section-title-8 text-center mb-30 bottom-border">
        <h2>Recommended Products</h2>
        <p className="bottomBorder"></p>
      </div>
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => {
          return (
            <SimilarCard
              id={item.id}
              prodName={item.prodname}
              startPrice={item.startprice}
              category={item.category}
              buyNowPrice={item.buynowprice}
              description={item.description}
              condition={item.condition_}
              image={item.image}
              secondsLeft={item.secondsleft}
              currentPrice={item.currentprice}
            />
          );
        })}
        {/* <SimilarCard
          id={"sdk"}
          prodName={"xkxkkx"}
          startPrice={"xkkxkxk"}
          category={"cjateg"}
          buyNowPrice={12}
          description={"ssss"}
          condition={"new"}
          image={"iamge"}
          secondsLeft={234}
        />
        <SimilarCard
          id={"sdk"}
          prodName={"xkxkkx"}
          startPrice={"xkkxkxk"}
          category={"cjateg"}
          buyNowPrice={12}
          description={"ssss"}
          condition={"new"}
          image={"iamge"}
          secondsLeft={234}
        />
        <SimilarCard
          id={"sdk"}
          prodName={"xkxkkx"}
          startPrice={"xkkxkxk"}
          category={"cjateg"}
          buyNowPrice={12}
          description={"ssss"}
          condition={"new"}
          image={"iamge"}
          secondsLeft={234}
        />
        <SimilarCard
          id={"sdk"}
          prodName={"xkxkkx"}
          startPrice={"xkkxkxk"}
          category={"cjateg"}
          buyNowPrice={12}
          description={"ssss"}
          condition={"new"}
          image={"iamge"}
          secondsLeft={234}
        />
        <SimilarCard
          id={"sdk"}
          prodName={"xkxkkx"}
          startPrice={"xkkxkxk"}
          category={"cjateg"}
          buyNowPrice={12}
          description={"ssss"}
          condition={"new"}
          image={"iamge"}
          secondsLeft={234}
        />
        <SimilarCard
          id={"sdk"}
          prodName={"xkxkkx"}
          startPrice={"xkkxkxk"}
          category={"cjateg"}
          buyNowPrice={12}
          description={"ssss"}
          condition={"new"}
          image={"iamge"}
          secondsLeft={234}
        /> */}
      </Carousel>
    </div>
  );
};
export default CarouselSimilarItems;
