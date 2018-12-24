<?php
require_once 'init.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Language trainer</title>
    </head>
    <body>
        <div id="app">
            <div v-if="!started">
                <p>Kies een les:</p>
                <select v-model="selectedChapter">
                    <option v-for="chapter in chapters" v-bind:value="chapter.title">{{ chapter.title }}</option>
                </select>
                <button v-on:click="start()">Start</button>
            </div>
            <div v-if="started">
                Gestart met {{ selectedChapter }}
                <button v-on:click="toStartScreen()">Terug</button>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script type="text/javascript">
            var chapters = <?php echo json_encode($formatted); ?>
        </script>
        <script src="app.js"></script>
    </body>
</html>