let distance_threshold_1 = document.getElementById("threshold");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const slope = 3.43;

function canvasSetup() {
    const drawGrid = function (w, h, id) {
        ctx.canvas.width = w;
        ctx.canvas.height = h;
        ctx.strokeStyle = "#333";

        for (x = 0; x <= w; x += 50) {
            for (y = 0; y <= h; y += 50) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }
    };

    drawGrid(1918, 700, "grid");
    drawGraph();
}

function thresholds() {
    clearConsole();
    drawGraph();
    console.log("Threshold:" + distance_threshold_1.value);
};

function thresholdLocations() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff0000";
    ctx.fillStyle = "#880000";
    ctx.arc((Number(distance_threshold_1.value)) * slope, (canvas.height - Number(distance_threshold_1.value)), 7, 0, (2 * Math.PI))
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#fff";
    ctx.arc((Number(distance_threshold_1.value)) * slope, (canvas.height - Number(distance_threshold_1.value)), 1, 0, (2 * Math.PI))
    ctx.fill();
}

function locationValues() {
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white"
    ctx.lineWidth = 3;
    ctx.setLineDash([15, 15]);
    ctx.beginPath();

    ctx.moveTo((Number(distance_threshold_1.value)) * slope, (canvas.height - Number(distance_threshold_1.value)));
    ctx.lineTo(0, (canvas.height - Number(distance_threshold_1.value)));

    ctx.moveTo((Number(distance_threshold_1.value)) * slope, (canvas.height - Number(distance_threshold_1.value)));
    ctx.lineTo((Number(distance_threshold_1.value)) * slope, canvas.height);

    ctx.stroke();

    ctx.font = "24px Arial";
    ctx.fillText((Number(distance_threshold_1.value) * slope), ((Number(distance_threshold_1.value)) * slope) / 2, (canvas.height - Number(distance_threshold_1.value) - 24))
    ctx.fillText((Number(distance_threshold_1.value)), (Number(distance_threshold_1.value))* slope + 24, ((canvas.height + 12 -  (0.5 * Number(distance_threshold_1.value)))))
    ctx.fill();
    console.log("Threshold:" + distance_threshold_1.value);
    thresholdLocations();
    
}

function drawGraph() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.setLineDash([0, 0]);
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height - (canvas.width / slope))
    ctx.stroke();
}

function clearConsole() {
    console.clear();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasSetup();
}

canvasSetup();
