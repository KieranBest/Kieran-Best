import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portfolio from "../../data/portfolio.json";
import { getImageUrl } from '../../utils';

export const Portfolio = () => {
    return (
        <section>
            <div>
                <h2 className="text-3xl font-bold text-center">Portfolio</h2>
            </div>
            <div className="m-auto pt-11 w-full sm:w-3/4 lg:w-1/2">
                <div>
                    <Carousel 
                        useKeyboardArrows={true} 
                        infiniteLoop={true} 
                        dynamicHeight={true}
                        showThumbs={false}
                        showStatus={false}
                    >
                        {portfolio.map((s) => (
                            <a href={s.source} target="_blank" key={s.id}>
                                <div>
                                    <p className="legend text-base mb-40">{s.title} - {s.description}</p>
                                    <img alt={s.title} src={getImageUrl(s.image)}
                                        className="p-8"
                                    />
                                </div>
                            </a>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}