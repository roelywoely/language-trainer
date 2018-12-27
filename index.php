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
            <p>{{ notice }}</p>
            <div v-if="!started">
                <p>Kies een les:</p>
                <select v-model="selectedChapterIndex">
                    <option v-for="(chapter, index) in chapters" v-bind:value="index">{{ chapter.title }}</option>
                </select>
                <button v-on:click="start()">Start</button>
            </div>
            <div v-if="started">
                <p>{{ sentences[currentItemIndex]['nl'] }}</p>
                <p><input type="text" v-model="answer"></p>
                <button v-on:click="next()">Verder</button>
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