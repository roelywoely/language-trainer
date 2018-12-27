<?php
require_once 'init.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Language trainer</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <div id="app" class="container-fluid mt-3">
            <div v-if="!started" class="row">
                <p>Kies een les:</p>
                <select v-model="selectedChapterIndex">
                    <option v-for="(chapter, index) in chapters" v-bind:value="index">{{ chapter.title }}</option>
                </select>
                <button v-on:click="start()">Start</button>
            </div>
            <div v-if="started">
                <div v-html="notice"></div>
                <div class="row">
                    <div class="col">
                        <h4>{{ sentences[currentItemIndex]['nl'] }}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h4><input type="text" v-model="answer" class="form-control form-control-lg"></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button v-on:click="next()" class="btn btn-primary">Antwoord controleren</button>
                        <button v-on:click="toStartScreen()" class="btn btn-secondary">Opnieuw beginnen</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script type="text/javascript">
            var chapters = <?php echo json_encode($formatted); ?>
        </script>
        <script src="app.js"></script>
    </body>
</html>