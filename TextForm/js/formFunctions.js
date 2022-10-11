/* window.onload = () => {
    // global object to store form values
    let formObject = {};

    // const name for local storage
    const storageName = "FORM_VALUES";

    // function takes the value of the input:range and updates the inner HTML of its associated <span>
    const handleRangeChange = (value) => {
        let span = document.getElementById("font-size-span");
        span.innerHTML = parseInt(value);
    };

    const clearCanvas = () => {
        ctx.clearRect(0, 0, 800, 300);
    };

    const drawCanvas = (
        name,
        backgroundColor,
        textColor,
        fontSize,
        fontType
    ) => {
        canvas.style.background = backgroundColor;
        // setting font-size, font family, font-color
        ctx.font = `${fontSize}px ${fontType}`;
        ctx.textAlign = "center";
        ctx.fillStyle = textColor;
        ctx.fillText(name, 400, 100);
    };

    // handle form submit
    const handleSubmit = (event) => {
        // prevent default reset
        event.preventDefault();
        // get all the values of the forms
        let name = document.getElementById("name").value;
        let backgroundColor = document.getElementById("bgd-color").value;
        let textColor = document.getElementById("text-color").value;
        let fontSize = document.getElementById("font-size").value;
        let fontType = document.querySelector(
            "input[name=font-name]:checked"
        ).value;

        let values = {
            name,
            backgroundColor,
            textColor,
            fontSize,
            fontType,
        };

        localStorage.setItem(storageName, JSON.stringify(values));
        console.log(values);
        clearCanvas();
        drawCanvas(name, backgroundColor, textColor, fontSize, fontType);
    };
};
 */