var app = new Vue({
    el: '#app',
    data: {
        answer: '',
        chapters: window.chapters,
        currentItemIndex: 0,
        notice: '',
        selectedChapterIndex: null,
        sentences: [],
        started: false,
        specialCharacters: ['ü', 'ä', 'ö', 'ß']
    },
    mounted: function() {
        //this.selectedChapterIndex = 0;
        //this.start();
    },
    methods: {
        start: function() {
            var chapter = this.chapters[this.selectedChapterIndex];
            if (typeof chapter !== 'undefined') {
                this.started = true;
                this.sentences = chapter['sentences'];
            }
        },
        toStartScreen: function() {
            this.selectedChapterIndex = null;
            this.started = false;
            this.notice = '';
        },
        next: function() {
            var correctAnswer = this.sentences[this.currentItemIndex]['de'];
            if (cleanupAnswer(this.answer) === cleanupAnswer(correctAnswer)) {
                this.notice = '<p class="alert alert-success">Goed!</p>';
            } else {
                this.notice = '<p class="alert alert-danger">Fout, het moest zijn: <strong>' + correctAnswer + '</strong></p>';
            }
            this.currentItemIndex++;
            this.answer = '';
        },
        addCharacter: function(character) {
            this.answer += character;
        }
    }
});

function cleanupAnswer(answer) {
    return $.trim(answer.replace(/[,\!\.\?]\s*$/, ""));
}