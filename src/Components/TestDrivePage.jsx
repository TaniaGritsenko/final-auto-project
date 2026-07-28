import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function TestDrivePage({goHome}) {
    const [sent, setSent] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setSent(true);
    }
    return (
        <main className="bg-dark text-light min-vh-100 py-5">
                <div className="container py-4">
                    <button type="button" 
                    className="btn btn-info rounded-pill px-4 mb-4"
                    onClick={goHome}>
                        Назад на головну
                    </button>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="bg-black bg-opacity-25 border border-secondary rounded-4 p-4 p-md-5">
                                {!sent ? (
                                    <>
                                <div className="text-center mb-4">
                                    <p className="aboud-brand text-info fw-semibold text-uppercase mb-2">
                                        AutoDrive
                                    </p>
                                    <h2 className="fw-bold mb-3">Замовити тест-драйв</h2>
                                       <p className="text-secondary mb-0">
                                        Залиште заявку, і наш менеджер допоможе підібрати зручний час.
                                </p>
                                </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input type="text"
                                            className="form-control form-control-lg rounded-3"
                                            placeholder="Ваше ім'я"
                                            required></input>
                                        </div>
                                        <div className="mb-3">
                                            <input type="tel"
                                            className="form-control form-control-lg rounded-3"
                                            placeholder="Номер телефону"
                                            required></input>
                                        </div>
                                        <div className="mb-4">
                                            <input type="tex"
                                            className="form-control form-control-lg rounded-3"
                                            placeholder="Який автомобіль вас цікавить"
                                            required></input>
                                        </div>
                                        <button type="submit"
                                        className="btn btn-info btn-lg w-100 rounded-pill fw-semibold">
                                            Відправити заявку
                                        </button>
                                       </form>
                                       </>
                                ) : (
                                    <div className="text-center py-5">
                                        <div className="success-icon mb-3">
                                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                        </div>
                                        <h3 className="text-info fw-bold mb-3">
                                            Заявку надіслано
                                        </h3>
                                        <p className="text-secondary mb-0">
                                            Дякуємо! Наш менеджер незабаром зв'яжеться з вами.
                                        </p>
                                        <button type="button"
                                         className="btn btn-outline-info rounded-pill px-4 mt-4"
                                         onClick={goHome}>
                                            Повернутися на головну
                                         </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    );
}

export default TestDrivePage;