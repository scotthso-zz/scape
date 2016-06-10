const elem = document.getElementById('target');



document.getElementById('button').addEventListener('click', () => {
    if (screenfull.enabled) {

        screenfull.request();
        //paint();
    }
});