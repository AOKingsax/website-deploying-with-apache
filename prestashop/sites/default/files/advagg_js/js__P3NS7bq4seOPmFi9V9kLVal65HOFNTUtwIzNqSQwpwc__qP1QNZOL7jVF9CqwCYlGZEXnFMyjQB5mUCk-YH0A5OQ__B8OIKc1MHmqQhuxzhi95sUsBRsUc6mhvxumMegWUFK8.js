/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/modules/custom/ps_users/js/ps-users-qualification.js. */
(function($) {
    Drupal.behaviors.psUsersQualification = {
        attach: function(context, settings) {
            var modal = {
                ps_back: "#edit-ps-back",
                ps_form: "#ps-users-qualification-form",
                ps_prev: "ps-prev",
                ps_step_one: "#edit-ps-step-one",
                ps_step_two: "#edit-ps-step-two",
                ps_step_one_user: {
                    'new': "Je n'utilise pas encore PrestaShop",
                    user: "J'utilise déjà PrestaShop"
                },
                ps_step_two_user: {
                    merchant: "Je suis un marchand",
                    agency_freelance: "Je suis une agence ou un freelance",
                    other: "Autre"
                },
                ps_download_page: Drupal.settings.downloadPage,
                page_category: (typeof Drupal.settings.pageCategory[0] !== "undefined") ? Drupal.settings.pageCategory[0] : 'Other',
                init: function() {
                    var self = this;
                    self.modalOpenClosed();
                    self.categories();
                    self.allLink();
                    self.hideStepTwo();
                    $('input[type=radio][name=ps_step_one]').click(function() {
                        var user = $("input[type='radio'][name='ps_step_one']:checked").val();
                        if (user === 'new') {
                            self.goToStepTwo()
                        } else if (user === 'user') {
                            analytics.track("Segmentation Form Filled", {
                                experience: self.ps_step_one_user[user],
                                user_type: ''
                            });
                            self.addLoader();
                            self.send()
                        }
                    });
                    $('input[type=radio][name=ps_step_two]').click(function() {
                        var user_step_one = $("input[type='radio'][name='ps_step_one']:checked").val(),
                            user_step_two = $("input[type='radio'][name='ps_step_two']:checked").val();
                        analytics.track("Segmentation Form Filled", {
                            experience: self.ps_step_one_user[user_step_one],
                            user_type: self.ps_step_two_user[user_step_two]
                        });
                        self.addLoader();
                        self.send()
                    });
                    $(this.ps_back).click(function(event) {
                        event.preventDefault();
                        self.backToStepOne()
                    })
                },
                send: function() {
                    $(this.ps_form).submit()
                },
                addLoader: function() {
                    $(this.ps_form).addClass('loading')
                },
                hideStepTwo: function() {
                    $(this.ps_step_two).hide();
                    $(this.ps_back).hide()
                },
                backToStepOne: function() {
                    $(this.ps_step_one).show().addClass(this.ps_prev);
                    this.hideStepTwo()
                },
                goToStepTwo: function() {
                    $(this.ps_step_one).hide().removeClass(this.ps_prev);
                    $(this.ps_step_two).show();
                    $(this.ps_back).show()
                },
                allLink: function() {
                    var self = this;
                    $("a").each(function() {
                        if (self.ps_download_page && this.href.indexOf(self.ps_download_page) != -1) $(this).attr("data-toggle", "modal").attr("data-target", "#users-qualification").attr("href", "#")
                    })
                },
                categories: function() {
                    analytics.page({
                        category: this.page_category
                    })
                },
                modalOpenClosed: function() {
                    var self = this;
                    $('#users-qualification').on('shown.bs.modal', function() {
                        $("input[name=ps_time_spent]").val(Date.now())
                    });
                    var modalClosingMethod = "close_button";
                    $('#users-qualification').on('click', function(e) {
                        modalClosingMethod = "click_overlay";
                        setTimeout(function() {
                            modalClosingMethod = "close_button"
                        }, 1)
                    });
                    $('#users-qualification').on('hidden.bs.modal', function() {
                        analytics.track("Segmentation Form Closed", {
                            action: modalClosingMethod,
                            time_spent: self.timeSpent(),
                            step: self.step()
                        })
                    });
                    $("a").on('click', function(e) {
                        if ($(this).data('target') == '#users-qualification') {
                            var action = 'other';
                            if ($(this).parents().eq(2).hasClass('header-main-menu')) {
                                action = 'header'
                            } else if ($(this).parents().eq(2).hasClass('header-buttons')) action = 'banner';
                            analytics.track("Segmentation Form Opened", {
                                action: action
                            })
                        }
                    })
                },
                timeSpent: function() {
                    var date_open = $("input[name=ps_time_spent]").val(),
                        date_closed = Date.now();
                    return Math.floor((date_closed - date_open) / 1e3)
                },
                step: function() {
                    var step = 1;
                    if ($("input[type='radio'][name='ps_step_one']:checked").val() == 'new') step = 2;
                    return step
                }
            };
            modal.init()
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/modules/custom/ps_users/js/ps-users-qualification.js. */