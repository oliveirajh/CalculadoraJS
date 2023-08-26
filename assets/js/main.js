function startCalculator(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        start(){
            this.PressBtn();
        },

        PressBtn(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnClick(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.delOne();
                }
                if(el.classList.contains('btn-equal')){
                    this.Result();
                }
            }.bind(this));
        },

        btnClick(val){
            this.display.value += val;
        },

        clearDisplay(){
            this.display.value = '';
        },

        delOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        Result(){
            let count = this.display.value;

            try{
                count = eval(count);

                if(!count){
                    alert('Invalid count!');
                    return;
                }

                this.display.value = String(count);
            }catch(e){
                alert('Invalid count!');
                return;
            }
        }


    }
}

const calculator = startCalculator();
calculator.start();