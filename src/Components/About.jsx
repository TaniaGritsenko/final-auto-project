function About({goHome}) {
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
                    <h2 className="display-5 fw-bold mb-3">
                        Про нас
                    </h2>
                    <p className="lead text-secondary mx-auto about-intro">
                        Ми допомагаємо знайти автомобіль, який відповідатиме вашому стилю життя, бюджету та потребам.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <div className="about-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100">
                            <h3 className="h4 text-info mb-3">Широкий вибір</h3>
                            <p className="text-secondary mb-0">
                                У нашому каталозі представлені бензинові, дизельні, гібридні та електричні автомобілі різних брендів.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100">
                            <h3 className="h4 text-info mb-3">Чесна інформація</h3>
                            <p className="text-secondary mb-0">
                                Кожне авто має фотографії, опис, комплектацію та основні характеристики, щоб вам було легше зробити вибір.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100">
                            <h3 className="h4 text-info mb-3">Тест-драйв</h3>
                            <p className="text-secondary mb-0">
                                Ви можите залишити заявку на тест-драйв, випробувати автомобіль і зрозуміти, чи підходить він саме вам.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <p className="fs-5 mb-0">
                        Наша мета - зробити вибір автомобіля простим, зручним і приємним.
                    </p>
                </div>
            </div>
        </section>
        
    )
}

export default About;