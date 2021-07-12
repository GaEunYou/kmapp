"use strict";

var homeApp = new Vue({
    el:"#analFile",
    data: {
        checkSurfs:[
            {"val": "temperature", "txt": "기온(℃)", "checked":"temperature"},
            {"val": "wind", "txt": "바람(m/s)", "checked":false},
            {"val": "humidity", "txt": "습도(%)", "checked":false},
            {"val": "visibility", "txt": "시정(km)", "checked":false},
            {"val": "downward_SW_flux", "txt": "태양광(W/㎡)", "checked":false}
        ],
        checkVerts: [
            {"val": "temperature", "txt": "기온(℃)", "checked":"temperature"},
            {"val": "wind", "txt": "바람(m/s)", "checked":false},
            {"val": "humidity", "txt": "해면기압(hPa)", "checked":false}
        ],
    }
});