const pointDoc: HTMLElement = document.getElementById("_point");
const nameDoc: HTMLElement = document.getElementById("name");
const endBtnDoc: HTMLElement = document.getElementById("endBtn");
const startBtnDoc: HTMLElement = document.getElementById("startBtn");

export default class MainPage{
    //参数
    private _maxPointString: string = '_maxPoint'; 
    private _point: number = 0;
    private _dividend: number  = 0; //被除数
    private _divisor: number  = 0; //除数
    private _count: number = 0;
    private _end: boolean = false;
    private _timer: any = undefined;
    private _maxPoint: number = -1;

    constructor(){
        this._init();
    }

    /**
     * 初始化函数 
     **/
    private _init(): void{
        pointDoc.innerText = `当前分数${ 0 }`;
        nameDoc.innerText = `等待开始`;
        endBtnDoc.style.display = 'none';
        startBtnDoc.style.display = 'block';
      
        const point: String = localStorage.getItem(this._maxPointString);
      
        startBtnDoc.addEventListener('click', () => {
            this._start();
        });
        endBtnDoc.addEventListener('click', () => {
            this._giveResult()
        });
      
        if(!point){
          localStorage.setItem(this._maxPointString, String(this._maxPoint));
        }
        else{
          this._maxPoint = Number(point);
        }
    }


//====================================状态类====================================
    private _start(): void{
        let dividendString  = '';
        let divisorString  = '';

        for(let i = 0; i < 6; i++){
            var ccc = Math.floor((Math.random() * 10));

            dividendString += String(ccc);

            if( i < 3){
                var dd = Math.floor((Math.random() * 10));

                divisorString += String(dd); 
            }
        }

        endBtnDoc.style.display = 'block';
        startBtnDoc.style.display = 'none';
        this._dividend = Number(dividendString);
        this._divisor = Number(divisorString);
        nameDoc.innerText = `公式${ this._dividend }/${ this._divisor }`;
        this._timer = setInterval(() => {
            this._count++;
            if(this._count > 90){
                this._giveResult(true);
            }
        }, 1000 * 1);
    }

    private _finishAnswer(overTime: boolean): void{
        nameDoc.innerText = `${ overTime ? '超时,' : '' }结果${ (this._dividend / this._divisor ).toFixed(1) }`;
        clearInterval(this._timer);
        this._count = 0;
    }

    private _endGame(): void{
        if(this._point > this._maxPoint){
            this._maxPoint = this._point;
            localStorage.setItem(this._maxPointString, String(this._point));
        }

        pointDoc.innerText = `最终分数${ this._point },历史最高分${ this._maxPoint }`;
        this._end = true;
        endBtnDoc.style.display = 'none';
        startBtnDoc.style.display = 'block';
    }

//====================================属性类====================================


//====================================工具类====================================
    private _giveResult(overTime?: boolean): void{
        if(this._end){
            return;
        }

        this._finishAnswer(overTime);
        
        const answer: number = Number((document.getElementById("field1") as any).value);

        if(answer !== Number((this._dividend / this._divisor ).toFixed(1)) || overTime){
            this._endGame();
        }
        else{
            this._point += 1;
            pointDoc.innerText = `当前分数${ this._point }`;

            this._start();
        }
    }
}