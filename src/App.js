import "./styles.css";
import styled from "styled-components";
import Slideshow from "./components/Slideshow";

const images = [
  "http://cdn.shopify.com/s/files/1/0073/8148/3605/articles/Claude-Monet-San-Giorgio-Maggiore-at-Dusk_600x.jpg?v=1556745106",
  "https://media.overstockart.com/optimized/cache/data/product_images/MON1239-1000x1000.jpg",
  "https://gregcartmell.com/wp-content/uploads/2018/02/claude-monet-plein-air-painting.jpg",
  "https://www.claude-monet.com/images/paintings/the-artists-garden-at-giverny.jpg"
];

export default function App() {
  return (
    <Wrapper>
      <Slideshow images={images} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
