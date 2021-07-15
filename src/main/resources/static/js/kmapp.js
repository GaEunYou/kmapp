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
        checkTimeAll: {"val": "chkAll", "txt": "전체", "checked":false},
        checkTimes: [
            {"val": "00", "txt": "00", "checked":false},
            {"val": "03", "txt": "03", "checked":false},
            {"val": "06", "txt": "06", "checked":false},
            {"val": "09", "txt": "09", "checked":false},
            {"val": "12", "txt": "12", "checked":false},
            {"val": "15", "txt": "15", "checked":false},
            {"val": "18", "txt": "18", "checked":false},
            {"val": "21", "txt": "21", "checked":false},
        ],
        checked:[],
        checkAll:false,
        analysis: {
            analMethods: [
                {"key": 'avg', "txt": '평균'},
                {"key": 'max', "txt": '최대'},
                {"key": 'min', "txt": '최소'},
            ],
            analPeriods:[
                {"key": 'days', "txt": '일별'},
                {"key": 'months', "txt": '월별'},
                {"key": 'years', "txt": '년별'},
            ],
            analAreas:[
                {"key": 'Hkor', "txt": '대한민국'},
                {"key": 'Seoul', "txt": '서울'},
                {"key": 'Daejeon', "txt": '대전'},
                {"key": 'Daegu', "txt": '대구'},
                {"key": 'Busan', "txt": '부산'},
                {"key": 'Gwangju', "txt": '광주'},
                {"key": 'Jeju', "txt": '제주'},
                {"key": 'Incheon', "txt": '인천'},
                {"key": 'Ulsan', "txt": '울산'},
            ],
            analColors:[
                {"key": 'None', "txt": 'Default'},
                {"key": 'BlueRed', "txt": 'Blue-Red'},
                {"key": 'BlueYellowRed', "txt": 'Blue-Yellow-Red'},
                {"key": 'WhiteBlue', "txt": 'White-Blue'},
                {"kewy": 'WhiteYellowOrangeBlue', "txt": 'White-Yellow-Orange-Red'}
            ]
        }
    },
    methods: {
        ckAll: function () {
            this.checked = [];
            if(this.checkAll){
                for (let i in this.checkTimes){
                    this.checked.push(this.checkTimes[i].val);
                }
            }
        },
    }
});