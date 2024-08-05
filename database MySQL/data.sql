-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Agu 2024 pada 18.33
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enterkomputer`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `user_id` char(36) NOT NULL,
  `product_id` int(11) NOT NULL,
  `table_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `order`
--

INSERT INTO `order` (`id`, `user_id`, `product_id`, `table_id`, `price`, `quantity`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 1, 1, 12000, 1, '2024-08-05 16:22:11.894842', '2024-08-05 16:22:11.894842', NULL),
(2, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 6, 1, 6000, 1, '2024-08-05 16:23:20.289016', '2024-08-05 16:23:20.289016', NULL),
(4, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 3, 1, 8000, 1, '2024-08-05 16:23:55.696417', '2024-08-05 16:23:55.696417', NULL),
(5, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 8, 1, 15000, 1, '2024-08-05 16:24:08.147990', '2024-08-05 16:24:08.147990', NULL),
(6, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 11, 1, 46000, 2, '2024-08-05 16:28:49.323333', '2024-08-05 16:28:49.323333', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `printer_bar`
--

CREATE TABLE `printer_bar` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `table_no` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `printer_bar`
--

INSERT INTO `printer_bar` (`id`, `name`, `quantity`, `table_no`) VALUES
(1, 'Jeruk Dingin', 1, 1),
(2, 'Kopi Panas', 1, 1),
(3, 'Teh Manis', 1, 1),
(4, 'Nasi Goreng + Jeruk Dingin', 2, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `printer_dapur`
--

CREATE TABLE `printer_dapur` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `table_no` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `printer_dapur`
--

INSERT INTO `printer_dapur` (`id`, `name`, `quantity`, `table_no`) VALUES
(1, 'Mie Goreng', 1, 1),
(2, 'Nasi Goreng + Jeruk Dingin', 2, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `printer_kasir`
--

CREATE TABLE `printer_kasir` (
  `id` int(11) NOT NULL,
  `user_id` char(36) NOT NULL,
  `product_id` int(11) NOT NULL,
  `table_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `printer_kasir`
--

INSERT INTO `printer_kasir` (`id`, `user_id`, `product_id`, `table_id`, `quantity`, `price`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 1, 1, 1, 12000, '2024-08-05 16:22:11.878236', '2024-08-05 16:22:11.878236', NULL),
(2, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 6, 1, 1, 6000, '2024-08-05 16:23:20.273887', '2024-08-05 16:23:20.273887', NULL),
(4, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 3, 1, 1, 8000, '2024-08-05 16:23:55.685936', '2024-08-05 16:23:55.685936', NULL),
(5, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 8, 1, 1, 15000, '2024-08-05 16:24:08.133017', '2024-08-05 16:24:08.133017', NULL),
(6, '05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 11, 1, 2, 46000, '2024-08-05 16:28:49.307797', '2024-08-05 16:28:49.307797', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id`, `name`, `quantity`, `price`, `category`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Jeruk Dingin', 10, 12000, 'Minuman', '2024-08-05 16:02:52.619600', '2024-08-05 16:02:52.619600', NULL),
(2, 'Jeruk Panas', 10, 10000, 'Minuman', '2024-08-05 16:03:06.691899', '2024-08-05 16:03:06.691899', NULL),
(3, 'Teh Manis', 10, 8000, 'Minuman', '2024-08-05 16:03:23.630404', '2024-08-05 16:03:23.630404', NULL),
(4, 'Teh Tawar', 10, 5000, 'Minuman', '2024-08-05 16:03:37.465092', '2024-08-05 16:03:37.465092', NULL),
(5, 'Kopi Dingin', 10, 8000, 'Minuman', '2024-08-05 16:03:57.580057', '2024-08-05 16:03:57.580057', NULL),
(6, 'Kopi Panas', 10, 6000, 'Minuman', '2024-08-05 16:04:14.320256', '2024-08-05 16:04:14.320256', NULL),
(7, 'EXTRA ES BATU', 10, 2000, 'Minuman', '2024-08-05 16:04:34.131136', '2024-08-05 16:04:34.131136', NULL),
(8, 'Mie Goreng', 10, 15000, 'Makanan', '2024-08-05 16:05:00.130731', '2024-08-05 16:05:00.130731', NULL),
(9, 'Mie Kuah', 10, 15000, 'Makanan', '2024-08-05 16:05:08.225485', '2024-08-05 16:05:08.225485', NULL),
(10, 'Nasi Goreng', 10, 15000, 'Makanan', '2024-08-05 16:05:18.205801', '2024-08-05 16:05:18.205801', NULL),
(11, 'Nasi Goreng + Jeruk Dingin', 10, 23000, 'Promo', '2024-08-05 16:05:41.636006', '2024-08-05 16:05:41.636006', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'user');

-- --------------------------------------------------------

--
-- Struktur dari tabel `table`
--

CREATE TABLE `table` (
  `id` int(11) NOT NULL,
  `table_no` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `table`
--

INSERT INTO `table` (`id`, `table_no`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, '2024-08-05 16:22:00.335484', '2024-08-05 16:22:00.335484', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` char(36) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `voucher` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `isActive` tinyint(4) NOT NULL DEFAULT 1,
  `fcmToken` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) NOT NULL DEFAULT '0',
  `tokenVersion` int(11) NOT NULL DEFAULT 0,
  `last_updated` timestamp NULL DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `voucher`, `email`, `password`, `profileImage`, `isActive`, `fcmToken`, `phoneNumber`, `tokenVersion`, `last_updated`, `timestamp`, `roleId`) VALUES
('05a9c74b-b0a9-42f4-a4ff-833ae375cb1e', 'dandyira', 'iradandy', NULL, 'dandy2@gmail.com', '$2a$12$6OrceGiwgIo08wXsB1CbNupzKAHeBX2mIXz0vFZYk1JItp2d2smKW', '', 1, NULL, '0', 0, '2024-08-05 16:01:48', '2024-08-05 16:01:48', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_199e32a02ddc0f47cd93181d8fd` (`user_id`),
  ADD KEY `FK_539ede39e518562dfdadfddb492` (`product_id`),
  ADD KEY `FK_2e52c3d2ee23b941afed22f6a38` (`table_id`);

--
-- Indeks untuk tabel `printer_bar`
--
ALTER TABLE `printer_bar`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `printer_dapur`
--
ALTER TABLE `printer_dapur`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `printer_kasir`
--
ALTER TABLE `printer_kasir`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_bb1dd8654a73a3b98d0e56bc306` (`user_id`),
  ADD KEY `FK_35c978be5409aa4fc83ebc1351b` (`product_id`),
  ADD KEY `FK_5c24788e479f44a4141bb7c89fe` (`table_id`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_9d967d595d047b11696382afd5` (`name`);

--
-- Indeks untuk tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_ae4578dcaed5adff96595e6166` (`name`);

--
-- Indeks untuk tabel `table`
--
ALTER TABLE `table`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_58e4dbff0e1a32a9bdc861bb29` (`firstName`),
  ADD UNIQUE KEY `IDX_f2578043e491921209f5dadd08` (`phoneNumber`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  ADD KEY `FK_c28e52f758e7bbc53828db92194` (`roleId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `printer_bar`
--
ALTER TABLE `printer_bar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `printer_dapur`
--
ALTER TABLE `printer_dapur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `printer_kasir`
--
ALTER TABLE `printer_kasir`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `table`
--
ALTER TABLE `table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_199e32a02ddc0f47cd93181d8fd` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_2e52c3d2ee23b941afed22f6a38` FOREIGN KEY (`table_id`) REFERENCES `table` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_539ede39e518562dfdadfddb492` FOREIGN KEY (`product_id`) REFERENCES `produk` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `printer_kasir`
--
ALTER TABLE `printer_kasir`
  ADD CONSTRAINT `FK_35c978be5409aa4fc83ebc1351b` FOREIGN KEY (`product_id`) REFERENCES `produk` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_5c24788e479f44a4141bb7c89fe` FOREIGN KEY (`table_id`) REFERENCES `table` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_bb1dd8654a73a3b98d0e56bc306` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_c28e52f758e7bbc53828db92194` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
