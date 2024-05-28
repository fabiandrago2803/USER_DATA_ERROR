-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2024 a las 04:29:50
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `user_data`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_empleado`
--

CREATE TABLE `datos_empleado` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `genero` tinyint(9) NOT NULL,
  `edad` int(3) NOT NULL,
  `fechadenacimiento` date NOT NULL,
  `calle` text NOT NULL,
  `numero` int(5) NOT NULL,
  `codpostal` int(4) NOT NULL,
  `ciudad` text NOT NULL,
  `provincia` text NOT NULL,
  `codigoarea` int(4) NOT NULL,
  `telefono` int(8) NOT NULL,
  `email` varchar(30) NOT NULL,
  `antiguedad` int(2) NOT NULL,
  `areatrabajo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `datos_empleado`
--

INSERT INTO `datos_empleado` (`id`, `nombre`, `apellido`, `genero`, `edad`, `fechadenacimiento`, `calle`, `numero`, `codpostal`, `ciudad`, `provincia`, `codigoarea`, `telefono`, `email`, `antiguedad`, `areatrabajo`) VALUES
(6, 'fabian', 'drago', 0, 40, '0000-00-00', 'doblas', 1670, 1424, 'caba', 'bs as', 11, 12345678, 'fab@gmail.com', 8, 'administrativo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos_empleado`
--
ALTER TABLE `datos_empleado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos_empleado`
--
ALTER TABLE `datos_empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
