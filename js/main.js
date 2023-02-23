import $ from "jquery";
import 'normalize.css';
import '../tailwind.css'
import '../scss/style.scss';

import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./i18n";

$(function () {

    const langCode = {
        中文: "cn",
        en: "en",
    };

    const $langItem = $(".lang .lang__item");

    $(".lang-select-menu button").click(function () {
        const code = langCode[$(this).html().toLowerCase()];
        const selectText = $(this).html();
        $langItem.removeClass("select");

        $langItem.each(function () {
            if ($(this).html() == selectText) {
                $(this).addClass("select");
            }
        });
        localStorage.setItem("lang", code);
        $("body")
            .removeClass("cn en")
            .addClass(localStorage.getItem("lang") || "cn");

        $.localInit(code);
    });

    $langItem.click(function () {
        const selectText = $(this).html();
        $(this).removeClass("select");

        $(this).each(function () {
            if ($(this).html() == selectText) {
                $(this).addClass("select");
            }
        });
        const code = langCode[$(this).html().toLowerCase()];
        localStorage.setItem("lang", code);
        $("body")
            .removeClass("cn en")
            .addClass(localStorage.getItem("lang") || "cn");
        $.localInit(code);
    });

    $langItem.each(function () {
        $(this).removeClass("select");
        const code = langCode[$(this).html().toLowerCase()];
        if (code === (localStorage.getItem("lang") || "cn")) {
            $(this).addClass("select");
        }
    });


});
