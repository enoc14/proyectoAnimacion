<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo Correo</title>
	<meta charset="utf-8">
</head>
<body>
	<form method="POST" action="php/handlerForms.php">
		<input type="hidden" name="formType" value="ejercicio">
		<input type="text" name="nombre" placeholder="Nombre">
		<button type="submit">Enviar</button>
	</form>
</body>
</html>