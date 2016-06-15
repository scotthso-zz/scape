const elem = document.getElementById('target');



document.getElementById('button').addEventListener('click', () => {
    if (screenfull.enabled) {
    		document.getElementById('button').style.display = 'none';
        screenfull.request();
        //paint();
    }
});