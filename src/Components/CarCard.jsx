import { useState  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import{ Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import confetti from "canvas-confetti";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CarCard({ car, openDetalis, setOpenDetalis}) {
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [fullImageIndex, setFullImageIndex] = useState(null);
    const handleSendOrder = () => {
        setIsSent(true);
        confetti({
            particleCount: 100,
            angle: 55,
            spread: 80,
            scalar: 1.3,
            origin: {x: 0.05, y: 0.55},
        })
        confetti({
            particleCount: 100,
            angle: 125,
            spread: 80,
            startVelocity: 45,
            scalar: 1.3,
            origin: {x: 0.95, y: 0.55},
        })
    }
    return (
        <>
        <div className="car-card">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{clickable: true}}
                loop={true}
                grabCursor={true}
                className="car-swiper">
                    {car.images.map((image, index) => (
            <SwiperSlide key={index}>
                <img src={image} alt={car.title} className="car-img" onClick={() => setFullImageIndex(index)}></img>
            </SwiperSlide>
                 ))}
            </Swiper>
            <div className="car-content">
            <h3>{car.title}</h3>
            <p>Рік: {car.year}</p>
            <p>Пробіг: {car.mileage}</p>
            <p>Двигун: {car.engine}</p>
            <p>Паливо: {car.fuel}</p>
            <p>Коробка: {car.transmission}</p>
            <p>Колір: {car.color}</p>
            <h4>{car.price}</h4>
            <div className="car-buttons">
                <button onClick={() => setOpenDetalis({...openDetalis, [car.id]: !openDetalis [car.id]})}>
                    {openDetalis[car.id] ? "Згорнути" : "Детальніше"}
                </button>
                <button onClick={() => setShowOrderForm(true)}>Купити</button>
                </div>
                    {openDetalis[car.id] && (
                <div className="detalis-box">
                <h4>Комплектація</h4>
                    <ul>
                        {car.details?.map((item, index) => (
                            <li key={index}>{item}</li>
                         ))}
                    </ul>
                    <p>{car.description}</p>
                    </div>
                    )}
                    </div>
                    {showOrderForm && (
                <div className="order-modal">
                <div className="order-box">
                <button className="close-order"
                    onClick={() => {
                    setShowOrderForm(false);
                    setIsSent(false);
                }}
                    >x</button>
                <h3>Заявка на придбання авто</h3>
                <p>Ви обрали: {car.title}</p>
                     {!isSent ? (  
                 <>       
                <input type="text" placeholder="Ваше ім'я" required/>
                <input type="text" placeholder="Ваш телефон" required/>
                <button className="send-order"
                    onClick={handleSendOrder}>
                     Відправити заявку
                </button>
                </>
                    ) : (
                <p className="success-message">
                     Заявку надіслано. З вами зв'яжеться менеджер.
                </p>
                    )}
                </div>
                </div>
                )}
                </div>
                {fullImageIndex !== null && (
                    <div className="image-modal" onClick={() => setFullImageIndex(null)}>
                        <button type="button"
                          className="image-modal-close"
                          onClick={() => setFullImageIndex(null)}>
                            X
                          </button>
                          <button type="button"
                          className="image-modal-arrow image-modal-prev"
                          onClick={(event) => {event.stopPropagation()
                            setFullImageIndex((currentIndex) => currentIndex === 0
                            ? car.images.length - 1
                            : currentIndex - 1)
                          }}>
                            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                          </button>
                          <img src={car.images[fullImageIndex]}
                           alt={car.title}
                           className="image-modal-photo"
                           onClick={(event) => event.stopPropagation()}></img>
                            <button type="button"
                          className="image-modal-arrow image-modal-next"
                          onClick={(event) => {event.stopPropagation()
                            setFullImageIndex((currentIndex) => currentIndex ===
                            car.images.length - 1
                            ? 0
                            : currentIndex + 1)
                          }}>
                            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                          </button>
                          </div>
                )}
                </>
                );
}                            

export default CarCard;