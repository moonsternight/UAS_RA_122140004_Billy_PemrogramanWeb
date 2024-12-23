/*
Nama    : Billy
NIM     : 122140004
Kelas   : Pemrograman Web - RA (UAS)
*/

CREATE DATABASE student_db;
USE student_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    academic_program VARCHAR(255) NOT NULL,
    university VARCHAR(255) NOT NULL,
    browser TEXT NOT NULL,
    ip_address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);