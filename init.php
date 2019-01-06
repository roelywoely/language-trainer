<?php
$chapters = getChapters();
$existingSentences = [];
function getChapters() {
    $response = file_get_contents('https://docs.google.com/spreadsheets/d/e/2PACX-1vS2k-Y_zTl8sss7-w5cOBaAh4jTNP7q_vwQk-IvIyXEtv134RKXQkvs3izOiwmYiBSILc1aB8ySL-1p/pub?gid=0&single=true&output=csv');
    $rows = explode("\n", $response);
    $chapters = [];
    $existingSentences = [];
    foreach ($rows as $index => $row) {
        if ($index === 0) {
            continue;
        }
        $columns = str_getcsv($row);

        if (!empty($columns[0])) {
            $chapters[] = [
                'title' => $columns[0],
                'sentences' => [],
            ];
        }

        $sentenceDutch = trim($columns[2]);
        $sentenceGerman = trim($columns[3]);
        if (!in_array($sentenceDutch, $existingSentences)) {
            $existingSentences[] = $sentenceDutch;
            $sentence = [
                'nl' => $sentenceDutch,
                'de' => $sentenceGerman,
            ];
            $chapters[count($chapters)-1]['sentences'][] = $sentence;
        }
    }

    foreach ($chapters as &$chapter) {
        shuffle($chapter['sentences']);
    }

    return $chapters;
}

function d($var) {
    echo '<pre>';
    var_dump($var);
    exit;
}