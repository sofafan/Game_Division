define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pointDoc = document.getElementById("point");
    var nameDoc = document.getElementById("name");
    var endBtnDoc = document.getElementById("endBtn");
    var startBtnDoc = document.getElementById("startBtn");
    var MainPage = /** @class */ (function () {
        function MainPage() {
            //参数
            this.maxPointString = 'maxPoint';
            this.point = 0;
            this.dividend = 0; //被除数
            this.divisor = 0; //除数
            this.count = 0;
            this.end = false;
            this.timer = undefined;
            this.maxPoint = -1;
            this._init();
        }
        /**
         * 初始化函数
         **/
        MainPage.prototype._init = function () {
            var _this = this;
            pointDoc.innerText = "\u5F53\u524D\u5206\u6570" + 0;
            nameDoc.innerText = "\u7B49\u5F85\u5F00\u59CB";
            endBtnDoc.style.display = 'none';
            startBtnDoc.style.display = 'block';
            var point = localStorage.getItem(this.maxPointString);
            startBtnDoc.addEventListener('click', function () {
                _this._start();
            });
            endBtnDoc.addEventListener('click', function () {
                _this._giveResult();
            });
            if (!point) {
                localStorage.setItem(this.maxPointString, String(this.maxPoint));
            }
            else {
                this.maxPoint = Number(this.maxPoint);
            }
        };
        //====================================状态类====================================
        MainPage.prototype._start = function () {
            var _this = this;
            var dividendString = '';
            var divisorString = '';
            for (var i = 0; i < 6; i++) {
                var ccc = Math.floor((Math.random() * 10));
                dividendString += String(ccc);
                if (i < 3) {
                    var dd = Math.floor((Math.random() * 10));
                    divisorString += String(dd);
                }
            }
            endBtnDoc.style.display = 'block';
            startBtnDoc.style.display = 'none';
            this.dividend = Number(dividendString);
            this.divisor = Number(divisorString);
            nameDoc.innerText = "\u516C\u5F0F" + this.dividend + "/" + this.divisor;
            this.timer = setInterval(function () {
                _this.count++;
                if (_this.count > 90) {
                    _this._giveResult(true);
                }
            }, 1000 * 1);
        };
        MainPage.prototype._finishAnswer = function (overTime) {
            nameDoc.innerText = (overTime ? '超时,' : '') + "\u7ED3\u679C" + (this.dividend / this.divisor).toFixed(1);
            clearInterval(this.timer);
            this.count = 0;
        };
        MainPage.prototype._endGame = function () {
            if (this.point > this.maxPoint) {
                this.maxPoint = this.point;
                localStorage.setItem(this.maxPointString, String(this.point));
            }
            pointDoc.innerText = "\u6700\u7EC8\u5206\u6570" + this.point + ",\u5386\u53F2\u6700\u9AD8\u5206" + this.maxPoint;
            this.end = true;
            endBtnDoc.style.display = 'none';
            startBtnDoc.style.display = 'block';
        };
        //====================================属性类====================================
        //====================================工具类====================================
        MainPage.prototype._giveResult = function (overTime) {
            if (this.end) {
                return;
            }
            this._finishAnswer(overTime);
            var answer = Number(document.getElementById("field1").value);
            if (answer !== Number((this.dividend / this.divisor).toFixed(1)) || overTime) {
                this._endGame();
            }
            else {
                this.point += 1;
                pointDoc.innerText = "\u5F53\u524D\u5206\u6570" + this.point;
                this._start();
            }
        };
        return MainPage;
    }());
    exports.default = MainPage;
});
