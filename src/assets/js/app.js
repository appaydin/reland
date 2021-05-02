// Import APP Saas
import '../scss/app.scss'

$(function () {
    /**
     * Magnific Popup - Image Gallery
     */
    $('div.magnific').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /**
     * Bootstrap Dropdown
     */
    $('.dropdown-toggle').dropdown();
    $('.dropdown')
        .on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(200);
        })
        .on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);
        });

    /**
     * Tooltips
     */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })

    /**
     * Navbar Fixed
     */
    let navbar = document.querySelector(".navbar");
    let sticky = navbar.offsetTop + 400;
    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    };

    /**
     * Responsive Navigation
     */
    $('.nav-responsive > .toggle').click(function () {
        list = $(this).next();

        if (list.hasClass('show')) {
            list.removeClass('show').slideUp('fast');
        } else {
            list.addClass('show').slideDown('fast');
        }
    });

    /**
     * Contact Form Ajax Submit
     */
/*    $('.ajaxForm').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        let loading = form.find('.loading');
        let button = form.find('[type=submit]');

        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form.serialize(),
            beforeSend: function () {
                loading.html('<svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>');
                loading.show();
                form.find('.invalid-feedback').remove();
                form.find('.is-invalid').removeClass('is-invalid');
                button.prop('disabled', true)
            },
            success: function (response) {
                if (response.status === 'success') {
                    setTimeout(function () {
                        loading.html('<svg fill="#5abe01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
                        form.find(':input').prop('disabled', true);
                    }, 600);
                } else {
                    setTimeout(function () {
                        loading.html('<svg fill="#dc3545" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>');
                        form.find(':input').prop('disabled', false);

                        // Set Error
                        for (var name in response.form) {
                            form.find('#' + name).toggleClass('is-invalid').after('<div class="invalid-feedback">' + response.form[name] + '</div>');
                        }
                    }, 600);
                }
            }
        })
    })*/
});