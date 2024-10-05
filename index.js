
let last = [0, 0]

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function calcDistance(last, current) {
    if (!Array.isArray(last) || !Array.isArray(current) || last.length < 2 || current.length < 2) {
        throw new Error("Invalid input: Both parameters should be arrays with at least two elements.");
    }

    const diffX = Math.abs(last[0] - current[0]);
    const diffY = Math.abs(last[1] - current[1]);

    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    return distance;
}



window.onmousemove = e => {

    const current = [e.pageX, e.pageY]
    
    if (calcDistance(last, current) >= 50){


        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = e.pageX + 'px';
        star.style.top = e.pageY + 'px';
        document.body.appendChild(star);
    
        // Add a custom property to change the star color dynamically
        Object.defineProperty(star, 'color', {
            set: function(value) {
                star.style.setProperty('--star-color', value); // Update the CSS variable for color
            }
        });
    
        const colors = ["rgb(0, 187, 249)", "rgb(0, 245, 212)", "rgb(252, 254, 255)"];
        value = selectRandom(colors);
        star.color = value;
    
        // Apply the fall animation
        const animations = ["fall1", "fall2", "fall3"];
        star.style.animation = `${selectRandom(animations)} 3s forwards`;
    
        setTimeout(() => {
            star.remove();
        }, 1000);

        // Update the last position
        last = current;
    }

    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 50);


}

