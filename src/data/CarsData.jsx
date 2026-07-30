import tiguanFront from "../assets/cars/tiguan/front.jpg";
import tiguanSide from "../assets/cars/tiguan/side.jpg";
import tiguanBack from "../assets/cars/tiguan/back.jpg";
import tiguanInterion from "../assets/cars/tiguan/interior.jpg";
import tiguanBackDetail from "../assets/cars/tiguan/back-detal.jpg";
import passatFront from "../assets/cars/passat/front.jpg";
import passatSide from "../assets/cars/passat/side.jpg";
import passatBack from "../assets/cars/passat/back.jpg";
import passatInterion from "../assets/cars/passat/interior.jpg";
import golfFront from "../assets/cars/colf/front.jpg";
import golfSide from "../assets/cars/colf/side.jpg";
import golfBack from "../assets/cars/colf/back.jpg";
import golfInterior from "../assets/cars/colf/interior.jpg";
import id4Front from "../assets/cars/id4/front.jpg";
import id4Side from "../assets/cars/id4/side.jpg";
import id4Back from "../assets/cars/id4/back.jpg";
import id4Interior from "../assets/cars/id4/interior.jpg";
import audiQ5Front from "../assets/cars/audi/front.jpg";
import audiQ5Side from "../assets/cars/audi/side.jpg";
import audiQ5Back from "../assets/cars/audi/back.jpg";
import audiQ5Interior from "../assets/cars/audi/interior.jpg";
import audiA6Front from "../assets/cars/audi-a6/front.jpg";
import audiA6Side from "../assets/cars/audi-a6/side.jpg";
import audiA6Back from "../assets/cars/audi-a6/back.jpg";
import audiA6Interior from "../assets/cars/audi-a6/interior.jpg";
import audiQ5HybridFront from "../assets/cars/audi-q5-hybrid/front.jpg";
import audiQ5HybridSide from "../assets/cars/audi-q5-hybrid/side.jpg";
import audiQ5HybridBack from "../assets/cars/audi-q5-hybrid/back.jpg";
import audiQ5HybridInterior from "../assets/cars/audi-q5-hybrid/interior.jpg";
import audiQ4EtronFront from "../assets/cars/audi-q4-e-tron/front.jpg";
import audiQ4EtronSide from "../assets/cars/audi-q4-e-tron/side.jpg";
import audiQ4EtronBack from "../assets/cars/audi-q4-e-tron/back.jpg";
import audiQ4EtronInterior from "../assets/cars/audi-q4-e-tron/interior.jpg";
import kiaSportageFront from "../assets/cars/kia-sportage/front.jpg";
import kiaSportageSide from "../assets/cars/kia-sportage/side.jpg";
import kiaSportageBack from "../assets/cars/kia-sportage/back.jpg";
import kiaSportageInterior from "../assets/cars/kia-sportage/interior.jpg";
import kiaPicantoFront from "../assets/cars/kia-picanto/front.jpg";
import kiaPicantoSide from "../assets/cars/kia-picanto/side.jpg";
import kiaPicantoBack from "../assets/cars/kia-picanto/back.jpg";
import kiaPicantoInterior from "../assets/cars/kia-picanto/interior.jpg";
import kiaSorentoFront from "../assets/cars/kia-sorento/front.jpg";
import kiaSorentoSide from "../assets/cars/kia-sorento/side.jpg";
import kiaSorentoBack from "../assets/cars/kia-sorento/back.jpg";
import kiaSorentoInterior from "../assets/cars/kia-sorento/interior.jpg";
import kiaEV6Front from "../assets/cars/kia-ev6/front.jpg";
import kiaEV6Side from "../assets/cars/kia-ev6/side.jpg";
import kiaEV6Back from "../assets/cars/kia-ev6/back.jpg";
import kiaEV6Interior from "../assets/cars/kia-ev6/interior.jpg";

export const cars = [
        {
            id: 1,
            title: 'Volkswagen Tiguan',
            year: '2021',
            mileage: '30 000 км',
            engine: '2.0 бензин',
            fuel: 'Бензин',
            transmission: 'Автомат',
            color: 'Білий',
            price: '29 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Круїз-контроль',
                'Мультимедія',
                'Салон у гарному стані',
            ],
            description:
            'Volkswagen Tiguan - комфортний сімейний кросовер у гарному стані. Підійде для міста, подорожей та щоденного використання',
            images: [
                tiguanFront,
                tiguanSide,
                tiguanBack,
                tiguanInterion,
                tiguanBackDetail,
            ],
        },
        {
            id: 2,
            title: 'Volkswagen Passat',
            year: '2020',
            mileage: '70 000 км',
            engine: '2.0 TDI',
            fuel: 'Дизель',
            transmission: 'Автомат',
            color: 'Чорний',
            price: '21 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Круїз-контроль',
                'Мультимедія',
                'Салон у гарному стані',
            ],
            description:
            'Volkswagen Passat - надійний дизельний седан для міста та далеких поїздок. Економний двигун, комфортний салон та гарна комрлектація',
            images: [
                passatFront,
                passatSide,
                passatBack,
                passatInterion,
            ],
        },
         {
            id: 3,
            title: 'Volkswagen Golf GTE',
            year: '2021',
            mileage: '45 000 км',
            engine: '1.4 гібрид',
            fuel: 'Гібрид',
            transmission: 'Автомат',
            color: 'Білий',
            price: '27 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Круїз-контроль',
                'Мультимедія',
                'Гібридний режим руху',
                'Салон у гарному стані',
            ],
            description:
            'Volkswagen Golf GTE - економний гібрид із спортивним характером. Підійде для міста, щоденних поїздок та комфортного керування',
            images: [
                golfFront,
                golfSide,
                golfBack,
                golfInterior,
            ],
        },
        {
            id: 4,
            title: 'Volkswagen ID.4',
            year: '2022',
            mileage: '20 000 км',
            engine: 'Електродвигун',
            fuel: 'Електро',
            transmission: 'Автомат',
            color: 'Білий',
            price: '35 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Адаптивний круїз-контроль',
                'Мультимедія',
                'Запас ходу до 500 км',
                'Салон у гарному стані',
            ],
            description:
            'Volkswagen ID.4 - сучасний електричний кросовер для міста та подорожей. Тихий хід, простий салон і економне обслуговування',
            images: [
                id4Front,
                id4Side,
                id4Back,
                id4Interior,
            ],
        },
        {
            id: 5,
            title: 'Audi Q5',
            year: '2022',
            mileage: '40 000 км',
            engine: '2.0 TFSI',
            fuel: 'Бензин',
            transmission: 'Автомат',
            color: 'Сірий',
            price: '39 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Повний привід',
                'Мультимедія',
                'Шкіряний салон',
            ],
            description:
            'Audi Q5 - стильний преміальний кросовер з комфортним салоном, повним приводом та гарною динамікою для міста і подорожей',
            images: [
                audiQ5Front,
                audiQ5Side,
                audiQ5Back,
                audiQ5Interior,
            ],
        },
        {
            id: 6,
            title: 'Audi A6',
            year: '2020',
            mileage: '50 000 км',
            engine: '2.0 TDI',
            fuel: 'Дизель',
            transmission: 'Автомат',
            color: 'Білий',
            price: '41 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Шкіряний салон',
                'Круїз-контроль',
                'Мультимедія',
                'LED Matrix фари',
                'Електропривід багажника',
                'Салон у гарному стані',
            ],
            description:
            'Audi A6 - преміальний дизельний седан із комфортним салоном, економним двигуном та сучасною комплектацією. Підійде для міста, бізнесу та далеких поїздок',
            images: [
                audiA6Front,
                audiA6Side,
                audiA6Back,
                audiA6Interior,
            ],
        },
        {
            id: 7,
            title: 'Audi Q5 TFSI',
            year: '2022',
            mileage: '49 000 км',
            engine: '2.0 TFSI e',
            fuel: 'Гібрид',
            transmission: 'Автомат',
            color: 'Сірий',
            price: '47 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Повний привід quattro',
                'Шкіряний салон',
                'LED фари',
                'Гібридний режим руху',
                'Салон у гарному стані',
            ],
            description:
            'Audi Q5 TFSI e - преміальний гібридний кросовер із комфортним салоном, повним приводом та економним режимом для міста і подорожей.',
            images: [
                audiQ5HybridFront,
                audiQ5HybridSide,
                audiQ5HybridBack,
                audiQ5HybridInterior,
            ],
        },
        {
            id: 8,
            title: 'Audi Q4 e-tron',
            year: '2025',
            mileage: '20 000 км',
            engine: 'Електродвигун',
            fuel: 'Електро',
            transmission: 'Автомат',
            color: 'Сірий',
            price: '45 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Цифрова панель приладів',
                'Мультимедія',
                'Запас ходу до 500 км',
                'Салон у гарному стані',
            ],
            description:
            'Audi Q4 e-tron - сучасний електричний кросовер з тихим ходом, комфортним салоном та економним обслуговуванняь. Ідеальний варіант для міста та подорожей.',
            images: [
                audiQ4EtronFront,
                audiQ4EtronSide,
                audiQ4EtronBack,
                audiQ4EtronInterior,
            ],
        },
        {
            id: 9,
            title: 'Kia Sportage',
            year: '2025',
            mileage: '33 000 км',
            engine: 'Гібридний двигун',
            fuel: 'Гібрид',
            transmission: 'Автомат',
            color: 'Сірий',
            price: '55 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Цифрова панель приладів',
                'Мультимедія',
                'Система утримання в смузі',
                'Адаптивний круїз-контроль',
                'LED оптика',
                'Салон у гарному стані',
            ],
            description:
            'Kia Sportage - сучасний кросовер із виразним дизайном, комфортним салоном та економним гібридним двигуном. Ідеальний варіант для міста та сімейних поїздок та далеких подорожей.',
            images: [
                kiaSportageFront,
                kiaSportageSide,
                kiaSportageBack,
                kiaSportageInterior,
            ],
        },
        {
            id: 10,
            title: 'Kia Picanto',
            year: '2021',
            mileage: '52 000 км',
            engine: 'Бензиновий двигун',
            fuel: 'Бензин',
            transmission: 'Автомат',
            color: 'Білий',
            price: '15 000 $',
            details: [
                'Кондиціонер',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Цифрова панель приладів',
                'Мультимедія',
                'Електросклопідйомники',
                'Центральний замок',
                'Економна витрата пального',
                'Компактний розмір для міста',
                'Салон у гарному стані',
            ],
            description:
            'Kia  Picanto - компактний бензиновий автомобіль для міста з економною витратою пального, зручним керуванням та комфортним салоном. Ідеально підходить для щоденних поїздок, паркування у місті та першого авто.',
            images: [
                kiaPicantoFront,
                kiaPicantoSide,
                kiaPicantoBack,
                kiaPicantoInterior,
            ],
        },
        {
            id: 11,
            title: 'Kia Sorento',
            year: '2022',
            mileage: '60 000 км',
            engine: '2.2 Дизельний двигун',
            fuel: 'Дизель',
            transmission: 'Автомат',
            color: 'Чорний',
            price: '39 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Шкіряний салон',
                'Мультимедія',
                'Круїз-контроль',
                'Повний привід',
                'LED оптика',
                'Повний привід',
                '7 місць',
                'Електропривід багажника',
                'Салон у гарному стані',
            ],
            description:
            'Kia  Sorento - просторий дизельний кросовер із потужним двигуном, автоматичною коробкою передач та комфортним салоном. Автомобіль чудово підходить для сімейних поїздок, міста та далеких подорожей.',
            images: [
                kiaSorentoFront,
                kiaSorentoSide,
                kiaSorentoBack,
                kiaSorentoInterior,
            ],
        },
        {
            id: 12,
            title: 'Kia EV6',
            year: '2023',
            mileage: '25 000 км',
            engine: 'Електродвигун',
            fuel: 'Електро',
            transmission: 'Автомат',
            color: 'Червоний металік',
            price: '49 000 $',
            details: [
                'Клімат контроль',
                'Підігрів сидінь',
                'Камера заднього виду',
                'Парктронік',
                'Цифрова панель приладів',
                'Мультимедія',
                'Адаптивний круїз-контроль',
                'Швидка зарядка',
                'LED оптика',
                'Запас ходу до 500км',
                'Бесключовий доступ',
                'Салон у гарному стані',
            ],
            description:
            'Kia  EV6 - сучасний електричний кросовер із футуристичним дизайном, комфортним салоном та великим запасом ходу. Автомобіль чудово підходить для міста, далеких поїздок і тих, хто обирає сучасні технології.',
            images: [
                kiaEV6Front,
                kiaEV6Side,
                kiaEV6Back,
                kiaEV6Interior,
            ],
        },
    ];