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
        progressPercentage: 0,
        progressPercentageWidth: '0%',
        selectedChapterIndex: null,
        sentences: [],
        showSpecialCharacterButtons: null,
        specialCharacters: ['ü', 'ä', 'ö', 'ß', 'Ü', 'Ä', 'Ö']
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

            if (typeof this.sentences[this.currentItemIndex + 1] == 'undefined') {
                this.end();
            } else {
                this.currentItemIndex++;
                this.progressPercentage = Math.floor((this.currentItemIndex / this.sentences.length) * 100);
                this.progressPercentageWidth = this.progressPercentage + '%';
            }
        },
        reset: function() {
            this.countCorrect = 0;
            this.countWrong = 0;
            this.currentItemIndex = 0;
            this.currentScreen = this.constants.SCREENS.START;
            this.notice = '';
            this.progressPercentage = 0;
            this.progressPercentageWidth = '0%';
            this.selectedChapterIndex = null;
            this.sentences = [];
            this.showSpecialCharacterButtons = null;
        },
        start: function() {
            var chapter = this.chapters[this.selectedChapterIndex];
            if (typeof chapter !== 'undefined') {
                this.currentScreen = this.constants.SCREENS.QUESTION;
                this.sentences = chapter['sentences'];
            }
            return false;
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