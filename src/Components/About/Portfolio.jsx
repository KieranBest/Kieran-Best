import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portfolio from "../../data/portfolio.json";
import { getImageUrl } from '../../utils';

const images = [
  "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];

export const Portfolio = () => {
    return (
        <section>
            <div className="box">
            <Carousel useKeyboardArrows={true}>
                {portfolio.map((s) => (
                <div className="w-full h-[80%]  rounded-lg" key={s.id} >
                    <img alt="sample_file" src={getImageUrl(s.image)}
                        className="px-6"
                    />
                </div>
                ))}
            </Carousel>
            </div>
        </section>
    )
}