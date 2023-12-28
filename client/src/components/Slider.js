import React from 'react';

const Slider = () => {
    return (
        <div className="container">
            <div id="carousel-basic" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="carousel-basic" data-slide-to="0" className="active"></li>
                    <li data-target="carousel-basic" data-slide-to="1"></li>
                    <li data-target="carousel-basic" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/id/513133900/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D1%80%D0%B5%D1%82%D1%80%D0%B8%D0%B2%D0%B5%D1%80-%D1%81%D0%B8%D0%B4%D1%8F-%D0%B2-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D1%81.jpg?s=612x612&w=0&k=20&c=ezBhkQ8zkX0hMjJSliu8gOtcrAgSkzC6pRlpvVtcoiQ=" alt="" className="img-fluid"/>
                            <div className="carousel-caption">
                                <h2>Карусель</h2>
                                <p>это демонстрация возможностей компонента carousel</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/513133900/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D1%80%D0%B5%D1%82%D1%80%D0%B8%D0%B2%D0%B5%D1%80-%D1%81%D0%B8%D0%B4%D1%8F-%D0%B2-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D1%81.jpg?s=612x612&w=0&k=20&c=ezBhkQ8zkX0hMjJSliu8gOtcrAgSkzC6pRlpvVtcoiQ=" alt="" className="img-fluid"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/513133900/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D1%80%D0%B5%D1%82%D1%80%D0%B8%D0%B2%D0%B5%D1%80-%D1%81%D0%B8%D0%B4%D1%8F-%D0%B2-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D1%81.jpg?s=612x612&w=0&k=20&c=ezBhkQ8zkX0hMjJSliu8gOtcrAgSkzC6pRlpvVtcoiQ=" alt="" className="img-fluid"/>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel-basic" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Назад</span>
                </a>
                <a className="carousel-control-next" href="#carousel-basic" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Вперед</span>
                </a>
            </div>

        </div>
    );
};

export default Slider;