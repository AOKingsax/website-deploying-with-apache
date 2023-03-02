/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/contrib/gss/scripts/autocomplete.js. */
(function($) {
    Drupal.behaviors.gssAutocomplete = {
        attach: function(context, settings) {
            if (settings.gss.key == undefined) return;
            $('.block-search .form-item-search-block-form input.form-text, .gss .form-item-keys input.form-text, .block-search .form-search input.form-text').focus(function() {
                this.select()
            }).mouseup(function(e) {
                e.preventDefault()
            }).autocomplete({
                position: {
                    my: "left top",
                    at: "left bottom",
                    offset: "0, 5",
                    collision: "none"
                },
                source: function(request, response) {
                    $.ajax({
                        url: "http://clients1.google.com/complete/search?q=" + request.term + "&hl=en&client=partner&source=gcsc&partnerid=" + settings.gss.key + "&ds=cse&nocache=" + Math.random().toString(),
                        dataType: "jsonp",
                        success: function(data) {
                            response($.map(data[1], function(item) {
                                return {
                                    label: item[0],
                                    value: item[0]
                                }
                            }))
                        }
                    })
                },
                autoFill: true,
                minChars: 0,
                select: function(event, ui) {
                    $(this).closest('input').val(ui.item.value);
                    $(this).closest('form').trigger('submit')
                }
            })
        }
    }
}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/contrib/gss/scripts/autocomplete.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/custom/ps_releases_api/js/ps_releases_prev_url.js. */
(function($) {
    Drupal.behaviors.prev_url_cookie = {
        attach: function(context, settings) {
            if (typeof(Drupal.settings.ps_releases_api) !== 'undefined' && Drupal.settings.ps_releases_api.is_download_page == 1) $('body').once(function() {
                $.ajax({
                    type: 'POST',
                    url: Drupal.settings.basePath + 'api/set_dl_prev_url_cookie',
                    dataType: 'json',
                    data: 'js=1&dl_prev_url=' + window.location.href
                })
            })
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/custom/ps_releases_api/js/ps_releases_prev_url.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_crowdin/js/prestashop_crowdin.js. */
function prestashop_crowdin_ajax(params) {
    jQuery.post("prestashop/post/crowdin", params, function(data) {
        if (data == 0) {
            jQuery('.autocomplete .error-alert').show();
            jQuery('.autocomplete .searchBar').addClass('error')
        } else {
            jQuery('.autocomplete .error-alert').hide();
            jQuery('.autocomplete .searchBar').removeClass('error');
            if (params.reset == true) {
                jQuery('#translation-list-table').html(data)
            } else jQuery('#translation-list-table').append(data)
        }
    })
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_crowdin/js/prestashop_crowdin.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_showcase_section/js/prestashop_showcase_section.js. */
function prestashop_showcase_section_ajax_load(params) {
    jQuery.post("prestashop/post/showcase", params, function(data) {
        jQuery('#showcase-list-container').append(data);
        if (params.ids.length < (params.loadId + 1) * 9) jQuery('#showcase-more').hide()
    })
}

function prestashop_showcase_section_ajax_post(params) {
    jQuery.post("prestashop/post/showcaseForm", params, function(data) {
        window.location = data
    })
};
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/features/prestashop_showcase_section/js/prestashop_showcase_section.js. */