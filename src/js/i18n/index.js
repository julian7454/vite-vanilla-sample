import $ from "jquery";
import i18next from "i18next";
import jqueryI18next from "jquery-i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import { cn as headerCN, en as headerEN } from "./header";

$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    if (!window.i18next_initialized) window.i18next_initialized = function () { };

    i18next.on("initialized", function (lng) {
        window.i18next_initialized(lng);
    });

    function localInit(lng = "cn") {
        i18next
            // detect user language
            // learn more: https://github.com/i18next/i18next-browser-languageDetector
            .use(Backend)
            //.use(i18nextBrowserLanguageDetector)
            // init i18next
            // for all options read: https://www.i18next.com/overview/configuration-options
            .init(
                {
                    debug: true,
                    fallbackLng: "cn",
                    backend: {
                        // loadPath: '/js/i18n/translation.json'
                        loadPath: '/locales/{{lng}}/{{ns}}.json'
                    }
                    //   resources: {
                    //     en: {
                    //       translation: {
                    //         header: headerEN,
                    //       },
                    //     },
                    //     cn: {
                    //       translation: {
                    //         header: headerCN,
                    //       },
                    //     },
                    //   },
                },
                (err, t) => {
                    // if (err) return console.error(err);
                    // for options see
                    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
                    jqueryI18next.init(i18next, $, { useOptionsAttr: false });
                    // start localizing, details:
                    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
                    $("[data-i18n]").localize({
                        email: "qwdqwd",
                    });
                }
            );
    }
    $.localInit = localInit;
    localInit(localStorage.getItem("lang") || "cn");
    $("section, body")
        .removeClass("cn en")
        .addClass(localStorage.getItem("lang") || "cn");
});
