import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">

            <div className="container text-center text-md-start">

                <div className="row text-center text-md-start" >

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Название компании</h5>
                        <p>Информации о комании</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Продукты</h5>
                        <p>
                            <a href="#" className="text-white text-decoration-none">О компании</a>
                        </p>
                        <p>
                            <a href="#" className="text-white text-decoration-none">Наши проекты</a>
                        </p>
                        <p>
                            <a href="#" className="text-white text-decoration-none">Исходные файлы</a>
                        </p>

                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Полезные ссылки</h5>
                        <p>
                            <a href="#" className="text-white text-decoration-none">Аккаунт</a>
                        </p>
                        <p>
                            <a href="#" className="text-white text-decoration-none">Рейтинг магазина</a>
                        </p>
                        <p>
                            <a href="#" className="text-white text-decoration-none">Помощь</a>
                        </p>
                    </div>


                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Контакты</h5>
                        <p>
                            <i className="fas fa-home mr-3"></i>Таганрог, 347900, Россия
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i>petshop@mail.ru
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i>+7(918)-**-**-***
                        </p>
                    </div>

                </div>

                <hr className="mb-4"/>
                <div className="row align-items-center">
                    <div className="text-center">
                        <p>Кафедра МОП ЭВМ</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;