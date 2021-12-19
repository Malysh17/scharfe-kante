$(document).ready(function () {
  $('form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    // if (document.form.phone.value == '') {
    //   valid = false;
    //   return valid;
    // }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      // $('#form').trigger('reset');
      alert('Спасибо за заявку! Скоро мы с вами свяжемся.');
    });
    return false;
  });
});