/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/contrib/advagg/advagg_font/advagg_font.js. */
function advagg_run_check(key, value) {
    'use strict';
    if (window.FontFaceObserver) {
        key = key.replace(/[^a-zA-Z0-9\-]/g, '');
        if (typeof window.FontFaceObserver.prototype.load === 'function') {
            new window.FontFaceObserver(value).load().then(function() {
                advagg_run_check_inner(key, value)
            }, function() {})
        } else new window.FontFaceObserver(value).check().then(function() {
            advagg_run_check_inner(key, value)
        }, function() {})
    } else window.setTimeout(function() {
        advagg_run_check(key, value)
    }, 100)
}

function advagg_run_check_inner(key, value) {
    'use strict';
    if (parseInt(Drupal.settings.advagg_font_no_fout, 10) !== 1) window.document.documentElement.className += ' ' + key;
    if (parseInt(Drupal.settings.advagg_font_cookie, 10) === 1) {
        var expire_date = new Date(new Date().getTime() + 86400 * 1e3);
        document.cookie = 'advaggfont_' + key + '=' + value + '; expires=' + expire_date.toUTCString() + '; domain=.' + document.location.hostname + '; path=/'
    }
}

function advagg_font_add_font_classes_on_load() {
    'use strict';
    for (var key in Drupal.settings.advagg_font)
        if (Drupal.settings.advagg_font.hasOwnProperty(key)) {
            var html_class = (' ' + window.document.documentElement.className + ' ').indexOf(' ' + key + ' ');
            if (html_class === -1) advagg_run_check(key, Drupal.settings.advagg_font[key])
        }
}

function advagg_font_check() {
    'use strict';
    if (window.jQuery && window.Drupal && window.Drupal.settings) {
        advagg_font_add_font_classes_on_load()
    } else window.setTimeout(advagg_font_check, 20)
};
advagg_font_check();;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/contrib/advagg/advagg_font/advagg_font.js. */