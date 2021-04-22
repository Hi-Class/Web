Vue.component('gif-items', {
    props : {
        gifs: {
            type: [String,Object],
        },
    },
    template : `<div class="gifs" @click="changeUrl()">
                    <img :src="gifs.src" :alt="gifs.alt" class="selectImg">
                </div>`,
    methods: {
        changeUrl () {
            vm.imgUrl = this.gifs.src.replace('png','gif');
            vm.mp4Url = this.gifs.src.replace('png','mp4');
        }
    },
 
});
const vm = new Vue({
    el : '.speakerBox',
    data () {
        return {
            load : false,
            imgUrl : '',
            mp4Url : '',
            gifsData : [
                {
                    id : '1',
                    src : './src/img/amongus.png',
                    alt : 'amongus',
                    chk : true,
                },
                {
                    id : '2',
                    src : './src/img/amongus2.png',
                    alt : 'amongus',
                    chk : true,
                },
                {
                    id : '3',
                    src : './src/img/bee.png',
                    alt : 'amongus',
                    chk : true,
                },
                {
                    id : '4',
                    src : './src/img/ledAnimate.png',
                    alt : 'amongus',
                    chk : true,
                },
            ],
        }
    },   
    beforeCreate() { //뷰 인스턴스가 실행되기 직전
    if(localStorage.getItem('intro') === 'start' || localStorage.getItem('intro') === null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'intro.html');
        xhttp.onreadystatechange = function() {
            let http = xhttp.responseURL;
            localStorage.setItem('intro','start');
            console.log(http);
            location.replace(http);
        }
        xhttp.send();
    }
    if (window.performance) {
        if (performance.navigation.type == 1) {
        localStorage.setItem('intro','start');
        }
    }
    },
    mounted() { //html과 연결된 후 실행
        this.load = true;
    },
});