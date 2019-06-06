let popup = new Vue ({
    el: "#popup",
    data: {
        image: ""
    },
    methods: {
        close: function() {
            this.image = '';
            focus();
        },
        setImage: (image) => {
            this.image = "images/" + image;
        }
    },
})