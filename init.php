<?php
$formatted = getFormattedData();

function getFormattedData() {
    $response = file_get_contents('https://docs.google.com/spreadsheets/d/e/2PACX-1vS2k-Y_zTl8sss7-w5cOBaAh4jTNP7q_vwQk-IvIyXEtv134RKXQkvs3izOiwmYiBSILc1aB8ySL-1p/pub?gid=0&single=true&output=csv');
    $rows = explode("\n", $response);
    $formatted = [];
    foreach ($rows as $index => $row) {
        if ($index === 0) {
            continue;
        }
        $columns = explode(',', $row);

        if (!empty($columns[0])) {
            $formatted[] = [
                'title' => $columns[0],
                'sentences' => [],
            ];
        }

        $sentence = [
            'nl' => trim($columns[2]),
            'de' => trim($columns[3]),
        ];
        $formatted[count($formatted)-1]['sentences'][] = $sentence;
    }

    return $formatted;
}

function d($var) {
    echo '<pre>';
    var_dump($var);
    exit;
}