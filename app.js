var app = new Vue({
    el: '#app',
    data: {
        currentItemIndex: 0,
        started: false,
        chapters: window.chapters,
        selectedChapter: null
    },
    methods: {
        start: function() {
            this.started = true;
        },
        toStartScreen: function() {
            this.selectedChapter = null;
            this.started = false;
        }
    }
});