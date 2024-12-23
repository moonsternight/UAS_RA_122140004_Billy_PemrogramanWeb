<?php
// Nama     : Billy
// NIM      : 122140004
// Kelas    : Pemrograman Web - RA (UAS)

session_start(); // Memulai session di awal script
require_once 'MahasiswaController.php';

$mahasiswa = new MahasiswaController();

if (isset($_GET['fetch']) && $_GET['fetch'] === 'true') {
    $dataMahasiswa = $mahasiswa->getMahasiswa();
    $data = [];
    $no = 1;

    foreach ($dataMahasiswa as $row) {
        $row['no'] = $no++;
        $data[] = $row;
    }

    echo json_encode(['success' => true, 'data' => $data]);
    exit;
}

if (isset($_GET['action']) && $_GET['action'] === 'get' && isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $studentData = $mahasiswa->getMahasiswaById($id);
    if ($studentData) {
        echo json_encode(['success' => true, 'data' => $studentData]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No data found for the provided ID']);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = isset($_POST['action']) ? $_POST['action'] : '';

    if ($action === 'delete') {
        $id = isset($_POST['id']) ? intval($_POST['id']) : 0;

        if (empty($id)) {
            echo json_encode(['success' => false, 'message' => 'ID is required for delete!']);
            exit;
        }

        $result = $mahasiswa->deleteMahasiswa($id);

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Data successfully deleted!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to delete data']);
        }
        exit;
    }

    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $age = isset($_POST['age']) ? intval($_POST['age']) : 0;
    $gender = isset($_POST['gender']) ? trim($_POST['gender']) : '';
    $academicProgram = isset($_POST['academicProgram']) ? trim($_POST['academicProgram']) : '';
    $university = isset($_POST['university']) ? trim($_POST['university']) : '';
    $terms = isset($_POST['terms']) ? filter_var($_POST['terms'], FILTER_VALIDATE_BOOLEAN) : false;

    if (empty($name) || empty($email) || empty($age) || empty($gender) || empty($academicProgram) || empty($university)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['success' => false, 'message' => 'Invalid email format!']);
            exit;
        }

    if ($age < 18) {
        echo json_encode(['success' => false, 'message' => 'You must be at least 18 years old.']);
        exit;
    }

    if (!$terms){
        echo json_encode(['success' => false, 'message' => 'You must agree to the terms.']);
        exit;
    }

    if ($action === 'insert' || empty($action)) {
        $browser = $_SERVER['HTTP_USER_AGENT'];
        $ipAddress = $_SERVER['REMOTE_ADDR'];

        $result = $mahasiswa->addMahasiswa($name, $email, $age, $gender, $academicProgram, $university, $browser, $ipAddress);

        if ($result) {
            $_SESSION['userData'] = [
                'name' => $name,
                'email' => $email,
                'age' => $age,
                'gender' => $gender,
                'academicProgram' => $academicProgram,
                'university' => $university
            ];
            echo json_encode(['success' => true, 'message' => 'Data successfully inserted!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to insert data']);
        }
        exit;
    }

    if ($action === 'update') {
        $id = isset($_POST['id']) ? intval($_POST['id']) : 0;

        if (empty($id)) {
            echo json_encode(['success' => false, 'message' => 'ID is required for update!']);
            exit;
        }

        $result = $mahasiswa->updateMahasiswa($id, $name, $email, $age, $gender, $academicProgram, $university);

        if ($result) {
            $_SESSION['userData'] = [
                'name' => $name,
                'email' => $email,
                'age' => $age,
                'gender' => $gender,
                'academicProgram' => $academicProgram,
                'university' => $university
            ];
            echo json_encode(['success' => true, 'message' => 'Data successfully updated!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to update data']);
        }
        exit;
    }

    echo json_encode(['success' => false, 'message' => 'Invalid action provided!']);
    exit;
}
?>