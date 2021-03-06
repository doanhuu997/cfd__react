import React, { useEffect, useRef } from 'react';
let $ =window.$;
function Gallery() {
    let listRef1=useRef()
    useEffect(() => {
        let $carouselGallery = $(listRef1.current),
            $progressBar = $('.homepage .section-gallery .timeline .process');

        $carouselGallery.flickity({
            contain: true,
            wrapAround: false,
            freeScroll: true,
            cellAlign: 'left',
            lazyLoad: 3,
            imagesLoaded: true,
            prevNextButtons: false
        });
        // var flkty = $carousel.data('flickity');
        // var $imgs = $('.homepage .section-4 .list .carousel-cell img');

        // $carousel.on('scroll.flickity', function (event, progress) {
        //     flkty.slides.forEach(function (slide, i) {
        //         var img = $imgs[i];
        //         var x = (slide.target + flkty.x) * -1 / 14;
        //         img.style.transform = 'translateX( ' + x + 'px)';
        //     });
        // });

        $carouselGallery.on('scroll.flickity', function (event, progress) {
            progress = Math.max(0.05, Math.min(1, progress));
            $progressBar.width(progress * 100 + '%');
        });

    })

    return (
        <section className="section-gallery">
            <div className="textbox">
                <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list" ref={listRef1}>
                <img data-flickity-lazyload="/img/img_team1.png" alt="" />
                <img data-flickity-lazyload="/img/img_team2.png" alt="" />
                <img data-flickity-lazyload="/img/img_team3.png" alt="" />
                <img data-flickity-lazyload="/img/img_team4.png" alt="" />
                <img data-flickity-lazyload="/img/img_team3.png" alt="" />
                <img data-flickity-lazyload="/img/img_team4.png" alt="" />
                <img data-flickity-lazyload="/img/img_team1.png" alt="" />
                <img data-flickity-lazyload="/img/img_team2.png" alt="" />
                <img data-flickity-lazyload="/img/img_team3.png" alt="" />
                <img data-flickity-lazyload="/img/img_team4.png" alt="" />
                <img data-flickity-lazyload="/img/img_team3.png" alt="" />
                <div className="item carousel-cell">
                    <img data-flickity-lazyload="/img/img_team4.png" alt="" />
                </div>
            </div>
            <div className="controls">
                <div className="btn_ctr prev" />
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" />
                </div>
                <div className="btn_ctr next" />
            </div>
        </section>
    );
}

export default Gallery;