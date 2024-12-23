<?php
// Nama     : Billy
// NIM      : 122140004
// Kelas    : Pemrograman Web - RA (UAS)

class Koneksi {
    protected $host = 'localhost';
    protected $user = 'root';
    protected $password = '';
    protected $dbname = 'student_db';

    public function getConnection() {
        $conn = new mysqli($this->host, $this->user, $this->password, $this->dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }
}

class MahasiswaController extends Koneksi {

    public function getMahasiswa() {
        $conn = $this->getConnection();
        $sql = "SELECT * FROM students";
        $result = $conn->query($sql);

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getMahasiswaById($id) {
        $conn = $this->getConnection();
        $stmt = $conn->prepare("SELECT * FROM students WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }

    public function addMahasiswa($name, $email, $age, $gender, $academicProgram, $university, $browser, $ipAddress) {
        $conn = $this->getConnection();
        $stmt = $conn->prepare("INSERT INTO students (name, email, age, gender, academic_program, university, browser, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssisssss", $name, $email, $age, $gender, $academicProgram, $university, $browser, $ipAddress);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    
    public function updateMahasiswa($id, $name, $email, $age, $gender, $academicProgram, $university) {
        $conn = $this->getConnection();
        $stmt = $conn->prepare("UPDATE students SET name = ?, email = ?, age = ?, gender = ?, academic_program = ?, university = ? WHERE id = ?");
        $stmt->bind_param("ssisssi", $name, $email, $age, $gender, $academicProgram, $university, $id);
        if ($stmt->execute()) {
            error_log("Update successful for ID: $id");
            return true;
        } else {
            error_log("Update failed for ID: $id, Error: " . $stmt->error);
            return false;
        }
    }

    public function deleteMahasiswa($id) {
        $conn = $this->getConnection();
        $stmt = $conn->prepare("DELETE FROM students WHERE id = ?");
        $stmt->bind_param("i", $id);

        return $stmt->execute();
    }
}
?>