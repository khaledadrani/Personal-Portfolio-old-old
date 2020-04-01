console.log('script loaded');



document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        try {
            let place = document.getElementById("line1");
            console.log(place.innerHTML);
        } catch (e) {
            console.log(e);

        }

    }
};