let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while (isNaN(money) || money =="" || money==null){
        money= +prompt("Ваш бюджет на месяц?","");
    }
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("введите обязательный расходов в этом месяце" , ''),
                    b = prompt("восколька обайдеться?",'');
        
            if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b !='' && a.length <50) {
                console.log("done");
                appData.expenses[a]=b;
            } else {
                i = i - 1;
            }
         }     
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget /30).toFixed();
        alert("ежедневный бюджет:" + appData.moneyPerDay); 
    },
    detectlevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("минимальный уревен достатки");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уревен достатки");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уревен достатки");
        } else {
            console.log("произашло ошибка")
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("какова сумма накопления?"),
                percent = +prompt("под какой процент?");
            
            appData.monthIncome = save/100/12* percent;
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет допольнительна доход? (Перечислите через запятую)','');
        appData.income = items.split(',');
        appData.income.push(prompt('Может чтото еше?'));
        appData.income.sort();
       
    },
};
console.log(appData);