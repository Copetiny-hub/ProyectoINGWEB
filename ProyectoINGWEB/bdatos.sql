-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 05:49:43
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `id` int(11) NOT NULL,
  `respuesta` varchar(255) NOT NULL,
  `usuarioIdId` int(11) DEFAULT NULL,
  `solicitudIdId` int(11) DEFAULT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(11) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `prioridad` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `asunto` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fechacreacion` date NOT NULL DEFAULT current_timestamp(),
  `usuarioIdId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id`, `estado`, `prioridad`, `categoria`, `asunto`, `descripcion`, `fechacreacion`, `usuarioIdId`) VALUES
(1, 'Abierto', 'Alto', 'electronica', 'blabla', 'blablaaaa', '2021-06-24', 48),
(2, '', '', '', '', '', '2021-06-24', 48),
(3, '', 'two', 'two', 'asuntoddd', 'descripciffffffon', '2021-06-28', NULL),
(4, '', '', '', '', '', '2021-06-28', NULL),
(5, '', 'prioridad', 'categoria', 'fafafafaf', 'descripcion', '2021-06-28', NULL),
(6, '', 'prioridad', 'categoria', 'asunto', 'descripcion', '2021-06-28', NULL),
(7, '', 'prioridad', 'categoria', 'asunto', 'descripcion', '2021-06-28', NULL),
(8, '', 'one', 'two', 'hola hola', 'hola hola', '2021-06-28', NULL),
(9, '', 'Media', 'Solicitud generica', 'resultado', 'se pide resultado', '2021-06-28', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `rut` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `clave`, `email`, `direccion`, `ciudad`, `region`, `rut`, `tipo`) VALUES
(20, 'axel', 'oyarzun', '$2a$10$ObydW2OdFEIp/n8yKN4fkuxghUO.TKgNWw393NzGh1dwR7qHU7X5y', 'jose@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '16644789-8', 'user'),
(21, 'axel', 'oyarzun', '$2a$10$lE5NDkJpwFsdFWNiNudDC.RBqMWMBvRcVqnPHlSyt38EZsFumE1Ie', 'amandaa@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '2', 'admin'),
(47, 'Leandro', 'Flores', '$2a$10$GJ7Z0yEIiHmXZUakMCxfiOQPnHVLYlp9hjxKKn5OTRFTqIArgaFP2', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '190331', 'user'),
(48, 'josesitoooo', 'Flores', '$2a$10$0sCiinLMD11AVwmaV3B4GuqQC0E4YqxrRd45cz1CZhoXBE5FgL3cq', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '1903311', 'user'),
(49, 'felipe', 'Flores', '$2a$10$8tJfoCXdrv/9tP7fi96LDe/K8jnMRXPJVmPuGKbG4WUHMZT9cahCi', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '190331451', 'user'),
(50, 'JORGE', 'Flores', '$2a$10$8y8JBv/bZCE9I/yx6zYzNOJCp7zaU4solqUT8n9YDmLA.iszBo47m', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '11111111-6', 'user'),
(51, 'JORGE', 'Flores', '$2a$10$j4NP3Ib9GOPhpwqQoFTcR.X800QY/HOc3tDJUssH9Zw7zcriDfPXC', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '21111111-6', 'user'),
(53, 'JORGE', 'Flores', '$2a$10$Cl7gvXdlCR7Ze2WqwNrv9.38/ZoxChlwR5JB6KTlw7nqYiwCrq5UO', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '3', 'user'),
(54, 'JORGE', 'Flores', '$2a$10$j5cs/.FIBnXjB43/xsbAWuIDUoflJ.9rlazEmzqFX8097mYltPLJC', 'amanda@outlook.cl', 'lincoln 100', 'El Tabo', 'Valparaiso', '4', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e1ec6fd3ee3e838036787fa24ea` (`usuarioIdId`),
  ADD KEY `FK_fb946a65dced47cc3d1bc5e55b6` (`solicitudIdId`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c84a6c04f84ec02b052e2e8ba03` (`usuarioIdId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_d7281c63c176e152e4c531594a` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `FK_e1ec6fd3ee3e838036787fa24ea` FOREIGN KEY (`usuarioIdId`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_fb946a65dced47cc3d1bc5e55b6` FOREIGN KEY (`solicitudIdId`) REFERENCES `solicitudes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `FK_c84a6c04f84ec02b052e2e8ba03` FOREIGN KEY (`usuarioIdId`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
