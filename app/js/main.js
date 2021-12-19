
// $(document).ready(function () {
//   $('form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
//     // if (document.form.phone.value == '') {
//     //   valid = false;
//     //   return valid;
//     // }
//     $.ajax({
//       type: "POST",
//       url: "send.php",
//       data: $(this).serialize()
//     }).done(function () {
//       // $('#form').trigger('reset');
//       alert('Vielen Dank! Bald werden wir uns mit Ihnen in Verbindung setzen');
//     });
//     return false;
//   });
// });