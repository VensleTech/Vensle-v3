import { Carousel } from 'react-carousel-minimal';

function CarouselPop({slide, thumbs}) {
  console.log(slide)
  console.log(thumbs)
 const data = [
    {
      image: "./pics (12).jpg",
    },
    {
      image: "./pics (13).jpg",
    },
    {
      image: "./pics (14).jpg",
    },
    {
      image: "./pics (23).jpg",
    },
    {
      image: "./pics (8).jpg",
    },
    {
      image: "./pics (6).jpg",
    },
    {
      image: "./pics (7).jpg",
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{padding: "0 0px",margin:'0 auto'}}>
          <Carousel
            data={data}
            width="100%"
            height="400px"
            radius="0px"
            slideNumberStyle={slideNumberStyle}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={thumbs}
            thumbnailWidth="100px"
            style={{textAlign: "center",width: "100%",margin: "0px auto",overflowX:'scroll'}}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselPop;

