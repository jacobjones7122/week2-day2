document.addEventListener('DOMContentLoaded', function(){
    var n = 0;
    var diceArray = [];
    var diceFace = [1, 2, 3, 4, 5, 6];        
    var sumArray = [];
    
    //addition sum button does not work when die is deleted
    var Die = function (value) { 
        this.value = value
        this.div = document.createElement('div');
        this.div.className = 'diceBlock';
        this.div.id = 'dice' + n;
        this.div.innerHTML = this.value;
        document.getElementById('diceHolder').appendChild(this.div);
        this.div.addEventListener('click', function(){
            this.value = Math.floor(Math.random() * diceFace.length + 1);
            this.innerHTML = this.value;
            diceArray.splice(n, 1, this);
        });     
        this.div.addEventListener('dblclick', function(){
            n--;
            document.getElementById('diceHolder').removeChild(this);
            diceArray.splice(this, 1);
            sumArray.splice(this, 1);
            console.log(diceArray);
        }); 
    };

    Die.prototype.update = function () {
        this.value = Math.floor(Math.random() * diceFace.length + 1);
        this.div.innerHTML = this.value;
    };

    Die.prototype.summation = function(){
        sumArray.push(this.value);
    };

    document.getElementById('btnDice').addEventListener('click', function(){
        var number = Math.floor(Math.random() * diceFace.length + 1);
        var die = new Die(number);
        diceArray.push(die);
        console.log(diceArray);
        n++; 
    });

    document.getElementById('btnRoll').addEventListener('click', function(){
        for (var i = 0; i < n; i++){
            diceArray[i].update()
        };
        console.log(diceArray);
    });

    document.getElementById('btnSum').addEventListener('click', function() {
        for (var i = 0; i < n; i++){
            diceArray[i].summation();
        };
        var sum = sumArray.reduce(function getSum(a, b){
            return a + b;
        });
        console.log(sumArray);
        alert("The sum is " + sum + "!");
        sumArray = [];
    })
});