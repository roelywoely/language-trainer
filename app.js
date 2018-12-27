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
            this.started = true;
            this.sentences = this.chapters[this.selectedChapterIndex]['sentences'];
        },
        toStartScreen: function() {
            this.selectedChapterIndex = null;
            this.started = false;
            this.notice = '';
        },
        next: function() {
            var correctAnswer = this.sentences[this.currentItemIndex]['de'];
            console.log($.diff('Hallo', 'Halo'));
            if ($.trim(this.answer) === $.trim(correctAnswer)) {
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