<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Pobierz dane z pliku na serwerze i wyślij je w postaci JSON
  $data = file_get_contents('data.json');
  header('Content-Type: application/json');
  echo $data;
} else if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'failure') {
  // Zapisz datę awarii w pliku na serwerze i wyślij nowe dane w postaci JSON
  $data = file_get_contents('data.json');
  $data = json_decode($data);
  $lastFailureDate = time();
  $daysWithoutFailure = (time() - strtotime($data->lastFailureDate)) / (60 * 60 * 24);
  $maxDaysWithoutFailure = max($daysWithoutFailure, $data->maxDaysWithoutFailure);
  $numberOfFailuresThisYear = ($daysWithoutFailure > 365) ? 1 : ($data->numberOfFailuresThisYear + 1);
  $data->lastFailureDate = date('Y-m-d', $lastFailureDate);
  $data->maxDaysWithoutFailure = $maxDaysWithoutFailure;
  $data->numberOfFailuresThisYear = $numberOfFailuresThisYear;
  file_put_contents('data.json', json_encode($data));
  header('Content-Type: application/json');
  echo json_encode($data);
}
