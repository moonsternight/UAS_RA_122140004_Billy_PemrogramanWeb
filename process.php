<?php
// Nama     : Billy
// NIM      : 122140004
// Kelas    : Pemrograman Web - RA (UAS)

require_once 'MahasiswaController.php';

$mahasiswaController = new MahasiswaController();

$dataMahasiswa = $mahasiswaController->getMahasiswa();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $academicProgram = $_POST['academicProgram'];
    $university = $_POST['university'];

    $isAdded = $mahasiswaController->addMahasiswa($name, $email, $age, $gender, $academicProgram, $university);

    if ($isAdded) {
        echo "Data berhasil ditambahkan!";
    } else {
        echo "Gagal menambahkan data.";
    }
}
?>