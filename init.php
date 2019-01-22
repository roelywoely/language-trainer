<?php
$chapters = getChapters();
$existingSentences = [];
function getChapters() {
    $response = file_get_contents('redemittel.csv');
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