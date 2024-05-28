<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$genero = $_POST['genero'];
$edad = $_POST['edad'];
$fechadenacimiento = $_POST['fechadenacimiento'];
$calle = $_POST['calle'];
$numero = $_POST['numero'];
$codpostal = $_POST['codpostal'];
$ciudad = $_POST['ciudad'];
$provincia = $_POST['provincia'];
$codigoarea = $_POST['codigoarea'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$antiguedad = $_POST['antiguedad'];
$areatrabajo = $_POST['areatrabajo'];


$conexion = mysqli_connect("localhost", "root", "", "user_data");
if (!$conexion) {
    die("Conexion fallida: " . mysqli_connect_error());
}

echo "Conexion exitosa";



$consulta = "insert into datos_empleado (nombre, apellido, genero, edad, fechadenacimiento, calle, numero, codpostal, ciudad, provincia, codigoarea, telefono, email, antiguedad, areatrabajo) 
values('$nombre', 
'$apellido', 
'$genero',
$edad, 
$fechadenacimiento,
'$calle', 
$numero,
$codpostal,
'$ciudad',
'$provincia',
$codigoarea,
$telefono,
'$email',
$antiguedad,
'$areatrabajo') ";

$resultado = mysqli_query($conexion,$consulta);

if($resultado)
{
    echo "Datos agregados correctamente";
    echo "<script>alert('Formulario Enviado');window.location.href='form_user_data.html';</script>";
}

else
{
    echo "Error al ingresar los datos";
}

mysqli_close($conexion);





