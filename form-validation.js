'use strict';
$(document).ready(function () {

    $('#contactForm').on('submit', function (e) {
        if ($(this).hasClass('form-submitted')) {
            e.preventDefault();
        } else {
            $(this).addClass('form-submitted');
            $('#name').attr('readonly', true);
            $('#content').attr('readonly', true);
            $('#email').attr('readonly', true);
            $('#submitButton').attr('disabled', true);
        }
    });

    var formValid = {
        name: false,
        email: false,
        content: false
    };

    function checkValidation() {
        if (formValid.name && formValid.email && formValid.content) {
            $('#submitButton').removeAttr('disabled');
        } else {
            $('#submitButton').attr('disabled', true);
        }
    }

    $('#name').on('input', function () {
        let name = $(this).val();

        function msg(body) {
            $('#name-error').text(body).show();
        };

        function hide() {
            $('#name-error').hide();
        };

        if (name.length < 1) {
            msg('To pole jest wymagane');
            formValid.name = false;
            checkValidation();
        } else {
            hide();
            formValid.name = true;
            checkValidation();
            var testExp = new RegExp(/^[a-zA-Z0-9]+$/);
            if (!testExp.test(name)) {
                msg('Niedozwolone znaki w polu imię');
                formValid.name = false;
                checkValidation();
            } else {
                hide();
                formValid.name = true;
                checkValidation();
                if (name.length < 3 || name.length > 30) {
                    msg('Imię musi mieć co najmniej 3 znaki, ale nie więcej niż 30');
                    formValid.username = false;
                    checkValidation();
                } else {
                    hide();
                    formValid.name = true;
                    checkValidation();
                }
            }
        }
    });

    $('#email').on('input', function () {
        let email = $(this).val();

        function msg(body) {
            $('#email-error').text(body).show();
        };

        function hide() {
            $('#email-error').hide();
        };

        if (email.length < 1) {
            msg('Pole e-mail jest wymagane');
            formValid.email = false;
            checkValidation();
        } else {
            hide();
            formValid.email = true;
            checkValidation();
            var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
            if (!testExp.test(email)) {
                msg('Musi to być poprawny adres e-mail');
                formValid.email = false;
                checkValidation();
            } else {
                hide();
                formValid.email = true;
                checkValidation();
                if (email.length < 3 || email.length > 30) {
                    msg('E-mail musi zawierać od 3 do 30 znaków');
                    formValid.email = false;
                    checkValidation();
                } else {
                    hide();
                    formValid.email = true;
                    checkValidation();
                }
            }
        }
    });

    $('#content').on('input', function () {
        let content = $(this).val();

        function msg(body) {
            $('#content-error').text(body).show();
        };

        function hide() {
            $('#content-error').hide();
        };

        if (content.length < 1) {
            msg('Pole wiadomość jest wymagane');
            formValid.content = false;
            checkValidation();
        } else {
            hide();
            formValid.content = true;
            checkValidation();
            var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
            if (!testExp.test(content)) {
                msg('Niedozwolone znaki w polu wiadomośc');
                formValid.content = false;
                checkValidation();
            } else {
                hide();
                formValid.content = true;
                checkValidation();
                if (content.length < 1 || content.length > 1000) {
                    msg('Wiadomość musi zawierać od 1 do 1000 znaków');
                    formValid.content = false;
                    checkValidation();
                } else {
                    hide();
                    formValid.content = true;
                    checkValidation();
                }
            }
        }
    });
});
