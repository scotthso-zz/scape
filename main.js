const elem = document.getElementById('target');



document.getElementById('button').addEventListener('click', () => {
    if (screenfull.enabled) {
    		document.getElementById('button').style.display = 'none';
    		document.getElementById('title').style.display = 'none';
    		document.getElementById('author').style.display = 'none';


        screenfull.request();
        //paint();
    } else {
    	document.getElementById('button').style.display = 'inherit';
    }
});

document.getElementById('close').addEventListener('click', () => {
   document.getElementById('about-popup').style.display = 'none';
});

document.getElementById('about').addEventListener('click', () => {
   document.getElementById('about-popup').style.display = 'block';
});