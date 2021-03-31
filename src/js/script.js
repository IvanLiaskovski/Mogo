"use strict";

$(document).ready(function () {

    let countFlag = true;

    $(".quotes-carusel").slick({
        prevArrow: "<i class='fas fa-chevron-left'></i>",
        nextArrow: "<i class='fas fa-chevron-right'></i>"
    });

    $("#nav-toggler").click(() => {
        $(".header-nav").stop().slideToggle();
    });

    $("#search").click(() => {
        $(".navbar-search-inner").toggleClass("active");
    });

    //Counter animation

    $(window).scroll(function () {
        //If user see count element
        if ($(this).scrollTop() > $(".statistic").offset().top - 450 && countFlag) {
            $(".stat-count").each(function () {
                $(this).prop("counter", 0).animate({
                    counter: $(this).data("count")
                }, {
                    duration: 3000,
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            countFlag = false;
        }
    });

    //Progress animation

    $(window).scroll(function () {
        //If user see progress
        if ($(this).scrollTop() > $(".progress-container").offset().top - 400) {
            $(".progressive").each(function () {
                $(this).animate(
                    { width: $(this).data("prog") + "%" },
                    { duration: 2000 });
            })
        }
    });

    //Accordion

    $(".services-accor-title").on("click", function () {
        $(".services-accor-title").next().removeClass("active");
        $(this).next().addClass("active");

        $(".services-accor-title").find("i").css("transform", "rotate(90deg)");
        $(this).find("i").css("transform", "rotate(-90deg)");
    });

    //Hover event change to click event for small and midle divices

    if ($(window).innerWidth() < 992) {

        $(".about-card").click(function () {
            $(this).toggleClass("active");
        });

        $(".temate-photo").click(function () {
            $(this).toggleClass("active");
        });

        $(".portfolio-wrapper").click(function () {
            $(this).toggleClass("active");
        });

        $(".header-nav .nav-item").click(() => {
            $(".header-nav").stop().slideToggle();
        });
    }

    //Scroll Reveal

    (() => {
        let sr = new ScrollReveal();

        sr.reveal(".animation-bottom", {
            duration: 1000,
            delay: 600,
            distance: "25rem",
            origin: "bottom"
        });

        sr.reveal(".animation-left", {
            duration: 1000,
            delay: 600,
            distance: "25rem",
            origin: "left"
        });

        sr.reveal(".animation-right", {
            duration: 1000,
            delay: 600,
            distance: "25rem",
            origin: "right"
        });
    })();

});
