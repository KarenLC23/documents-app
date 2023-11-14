-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2023 a las 13:22:31
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `documents_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documents`
--

CREATE TABLE `documents` (
  `id` bigint(255) UNSIGNED NOT NULL,
  `document_type_id` bigint(255) UNSIGNED NOT NULL,
  `processe_id` bigint(255) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(4000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `documents`
--

INSERT INTO `documents` (`id`, `document_type_id`, `processe_id`, `code`, `name`, `content`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'INS-ING-1', 'Instructivo de desarrollo', 'Contenido del instructivo de desarrollo', '2023-11-14 04:18:41', '2023-11-14 04:23:19'),
(2, 2, 2, 'MNU-DEV-2', 'Sistema Ventas', 'Guía para usar el sistema de ventas', '2023-11-14 04:25:22', '2023-11-14 04:30:54'),
(3, 3, 3, 'INF-APR-3', 'Informe Técnico de Pruebas de Seguridad', 'Resultados de pruebas de seguridad.', '2023-11-14 04:26:35', '2023-11-14 04:32:58'),
(4, 4, 4, 'POE-REV-4', 'Procedimiento Operativo Estándar', 'nstrucciones para atención al cliente.', '2023-11-14 04:27:21', '2023-11-14 04:33:09'),
(5, 5, 5, 'PSE-ARC-5', 'Política de Seguridad de Datos', 'Normas de seguridad de datos.', '2023-11-14 04:28:26', '2023-11-14 04:33:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `document_types`
--

CREATE TABLE `document_types` (
  `id` bigint(255) UNSIGNED NOT NULL,
  `prefix` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `document_types`
--

INSERT INTO `document_types` (`id`, `prefix`, `name`, `created_at`, `updated_at`) VALUES
(1, 'INS', 'INSTRUCTIVO', '2023-11-14 03:58:18', '2023-11-14 03:58:18'),
(2, 'MNU', 'Manual de Usuario', '2023-11-14 04:00:43', '2023-11-14 04:00:43'),
(3, 'INF', 'Informe Técnico', '2023-11-14 04:01:43', '2023-11-14 04:01:43'),
(4, 'POE', 'Procedimiento Operativo Estándar', '2023-11-14 04:02:21', '2023-11-14 04:02:21'),
(5, 'PSE', 'Política de Seguridad', '2023-11-14 04:03:00', '2023-11-14 04:03:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `processes`
--

CREATE TABLE `processes` (
  `id` bigint(255) UNSIGNED NOT NULL,
  `prefix` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `processes`
--

INSERT INTO `processes` (`id`, `prefix`, `name`, `created_at`, `updated_at`) VALUES
(1, 'ING', 'INGENIERÍA', '2023-11-14 04:08:40', '2023-11-14 04:08:40'),
(2, 'DEV', 'Desarrollo ', '2023-11-14 04:09:01', '2023-11-14 04:09:01'),
(3, 'APR', 'Aprobación ', '2023-11-14 04:09:24', '2023-11-14 04:09:24'),
(4, 'REV', 'Revisión ', '2023-11-14 04:10:05', '2023-11-14 04:10:05'),
(5, 'ARC', 'Archivo ', '2023-11-14 04:10:35', '2023-11-14 04:10:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(255) UNSIGNED NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`, `created_at`, `updated_at`) VALUES
(1, 'user_prueba', '$2y$10$MYtMWdHLUm0EKmgyHzf95OiRW6JNUGWtJW.tczNIsg38Psza/avZi', '2023-11-14 07:31:39', '2023-11-14 07:31:39');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `document_types`
--
ALTER TABLE `document_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `processes`
--
ALTER TABLE `processes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `document_types`
--
ALTER TABLE `document_types`
  MODIFY `id` bigint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `processes`
--
ALTER TABLE `processes`
  MODIFY `id` bigint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
