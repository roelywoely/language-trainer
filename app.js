var app = new Vue({
    el: '#app',
    data: {
        answer: '',
        chapters: window.chapters,
        constants: {
            SCREENS: {
                START: 'START',
                QUESTION: 'QUESTION',
                END: 'END'
            }
        },
        countCorrect: 0,
        countWrong: 0,
        currentItemIndex: 0,
        currentScreen: null,
        notice: '',
        selectedChapterIndex: null,
        sentences: [],
        specialCharacters: ['ü', 'ä', 'ö', 'ß']
    },
    created: function() {
        this.currentScreen = this.constants.SCREENS.START;
    },
    mounted: function() {
        //this.selectedChapterIndex = 0;
        //this.start();
    },
    methods: {
        addCharacter: function(character) {
            this.answer += character;
            $('#answer').focus();
        },
        end: function() {
            this.currentScreen = this.constants.SCREENS.END;
        },
        next: function() {
            var correctAnswer = this.sentences[this.currentItemIndex]['de'];
            if (cleanupAnswer(this.answer) === cleanupAnswer(correctAnswer)) {
                this.notice = '<p class="alert alert-success">Goed!</p>';
                this.countCorrect++;
            } else {
                this.notice = '<p class="alert alert-danger">Fout, het moest zijn: <strong>' + correctAnswer + '</strong></p>';
                this.countWrong++;
            }
            this.answer = '';


            console.log(typeof this.sentences[this.currentItemIndex + 1]);
            if (typeof this.sentences[this.currentItemIndex + 1] == 'undefined') {
                this.end();
            } else {
                this.currentItemIndex++;
            }
        },
        reset: function() {
            this.selectedChapterIndex = null;
            this.currentScreen = this.constants.SCREENS.START;
            this.notice = '';
            this.countCorrect = 0;
            this.countWrong = 0;
        },
        start: function() {
            var chapter = this.chapters[this.selectedChapterIndex];
            if (typeof chapter !== 'undefined') {
                this.currentScreen = this.constants.SCREENS.QUESTION;
                this.sentences = chapter['sentences'];
            }
        },
        toStartScreen: function() {
            this.selectedChapterIndex = null;
            this.notice = '';
        }
    }
});

function cleanupAnswer(answer) {
    return $.trim(answer.replace(/[,\!\.\?]\s*$/, ""));
}