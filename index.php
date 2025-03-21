<?php 
if (isset($_POST['submit'])) {
  print_r($_POST['nome']);
  print_r($_POST['email']);
  print_r($_POST['celular']);
  print_r($_POST['cidade']);
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bank now</title>
  <link rel="stylesheet" href="validate.css" />
</head>

<body>
  <div class="container">
    <div class="header">
      <h2>Create an account</h2>
    </div>
    <div id="error"></div>
    <div id="success"></div>
    <form id="form" class="form" method="post" action="">
      <div class="form-control">
        <label for="Username">Nome: </label>
        <input type="text" id="Username" name="nome" placeholder="nome completo" />
        <i class="fa-solid fa-exclamation-circle"></i>
        <i class="fa-sharp fa-solid fa-circle-check"></i>
        <!-- <div class="small">Message of error</div> -->
        <small class="small">Message of error</small>
      </div>

      <div class="form-control">
        <label for="userEmail">Email: </label>
        <input type="email" name="email" id="userEmail" placeholder="ex.:************@gmail.com" />
        <i class="fa-solid fa-exclamation-circle"></i>
        <i class="fa-sharp fa-solid fa-circle-check"></i>
        <small class="small">Message of error</small>
      </div>

      <!--add novos dados para a empresa taramps-->
      <div class="form-control">
        <label for="Celular"> Celular: </label>
        <input type="number" name="celular" id="phone" placeholder="ex:31999990000" />
        <i class="fa-solid fa-exclamation-circle"></i>
        <i class="fa-sharp fa-solid fa-circle-check"></i>
        <small class="small">Message of error</small>
      </div>
      <!--add novos dados para a empresa taramps-->
      <div class="form-control">
        <label for="cidade"> Cidade: </label>
        <input type="text" name="cidade" id="Cidade" placeholder="ex:Belo Horizonte" />
        <i class="fa-solid fa-exclamation-circle"></i>
        <i class="fa-sharp fa-solid fa-circle-check"></i>
        <small class="small">Message of error</small>
      </div>


      <!--<div class="form-control">
          <label for="Password"> User password: </label>
          <input type="password" id="Password" placeholder="your password" />
          <i class="fa-solid fa-exclamation-circle"></i>
          <i class="fa-sharp fa-solid fa-circle-check"></i>
          <small class="small">Message of error</small>
        </div>
        <div class="form-control">
          <label for="PasswordConfirmation">Password confirmation: </label>
          <input
            type="password"
            id="PasswordConfirmation"
            placeholder="repeat password"
          />
          <i class="fa-solid fa-exclamation-circle"></i>
          <i class="fa-sharp fa-solid fa-circle-check"></i>
          <small class="small">Message of error</small>
        </div> -->
      <div class="form-control">
        <button type="submit" id="send">Send</button>
      </div>
    </form>
    <section>
      <?php 
if (isset($_POST['submit'])) {
  print_r($_POST['nome']);
  print_r($_POST['email']);
  print_r($_POST['celular']);
  print_r($_POST['cidade']);
}
?>
    </section>
    <script src="https://kit.fontawesome.com/8dbc803407.js" crossorigin="anonymous"></script>
  </div>
  <script src="validate.js"></script>
</body>

</html>