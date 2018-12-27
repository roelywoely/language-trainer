var app = new Vue({
    el: '#app',
    data: {
        answer: '',
        chapters: window.chapters,
        currentItemIndex: 0,
        notice: '',
        selectedChapterIndex: null,
        sentences: [],
        started: false
    },
    methods: {
        start: function() {
            this.started = true;
            this.sentences = this.chapters[this.selectedChapterIndex]['sentences'];
        },
        toStartScreen: function() {
            this.selectedChapterIndex = null;
            this.started = false;
        },
        next: function() {
            var correctAnswer = this.sentences[this.currentItemIndex]['de'];
            if (this.answer === correctAnswer) {
                this.notice = 'Goed!';
            } else {
                this.notice = 'Fout, het moest zijn: ' + correctAnswer;
            }
            this.currentItemIndex++;
            this.answer = '';
        }
    }
});