import { useState } from "react";
import CarCard from "./CarCard";
import { cars } from "../data/CarsData";

function CarsPage({ goHome}) {
    const [openDetalis, setOpenDetalis] = useState({});
    const [activeFuel, setActiveFuel] = useState("Всі");
    const filteredCars = activeFuel === "Всі" ? cars : cars.filter((car) => car.fuel === activeFuel);
    return (
        <main>
            <section className="cars-page">
                <div className="container">
                    <button className="back-btn" onClick={goHome}>
                        Назад на головну
                    </button>
                    <h2>Автомобілі в наявності</h2>
                    <p className="subtitle">Оберіть авто якe підходить саме ВАМ</p>
                    <div className="fuel-filter">
                        {["Всі", "Бензин", "Дизель", "Гібрид", "Електро"].map((fuel) => (
                            <button key={fuel}
                            onClick={()=> setActiveFuel(fuel)}
                            className={activeFuel === fuel ? "active" : ""}>
                                {fuel}
                            </button>
                        ))}
                    </div>
                    <div className="cars-grid">
                        {filteredCars.map((car) => (
                            <CarCard key={car.id}
                              car={car}
                              openDetalis={openDetalis}
                              setOpenDetalis={setOpenDetalis}></CarCard>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CarsPage;