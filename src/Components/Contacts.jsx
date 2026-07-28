function Contacts({goHome}) {
    return (
        <section className="bg-dark text-light py-5 min-vh-100">
            <div className="container py-4">
                 <button className="back-btn" onClick={goHome}>
                        Назад на головну
                    </button>
                <div className="text-center mb-5">
                    <p className="about-brand text-info fw-semibold text-uppercase mb-2">
                        AutoDrive
                    </p>
                    <h2 className="display-5 fw-bold mb-3">Контакти</h2>
                    <p className="lead text-secondary mx-auto about-intro">
                        Якщо у вас виникли запитання, зв'яжіться з нами - ми відповімо та допоможемо підібрати автомобіль.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="about-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100 text-center">
                            <h3 className="h4 text-info mb-3">Телефон</h3>
                            <p className="text-secondary mb-2">
                                Зателефонуйте нашому менеджеру і ми відповімо на всі ваші питання.
                            </p>
                            <a href="tel: +380681518400" className="text-light text-decoration-none fw-semibold">+38 (068) 151-84-00</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100 text-center">
                            <h3 className="h4 text-info mb-3">Електронна пошта</h3>
                            <p className="text-secondary mb-2">
                                Напишіть нам у будь-який зручний для вас час. 
                            </p>
                            <a href="mailto:autodrive@gmail.com" className="text-light text-decoration-none fw-semibold">
                                autodrive@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100 text-center">
                            <h3 className="h4 text-info mb-3">Адреса</h3>
                            <p className="text-secondary mb-0">
                                м. Київ, вул. Арсенальна, 10
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <p className="fs-5 mb-1">Графік роботи</p>
                    <p className="text-secondary mb-0">
                        Понеділок - субота: 09:00 - 18:00
                        <br></br>
                        Неділя: вихідний
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;