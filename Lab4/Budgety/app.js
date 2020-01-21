//Function Constructor
var Income = function (ID, desc, value) {
    this.ID = ID;
    this.desc = desc;
    this.value = value;
}
function Expense(ID, desc, value) {
    this.ID = ID;
    this.desc = desc;
    this.value = value;
}

//Data Base
var data = {
    totals: {
        budget: 0,
        inc: 0,
        exp: 0
    },
    lists: {
        inc: [],
        exp: []
    }
}



//Add event listener
document.querySelector('.add__btn').addEventListener('click', add);

document.addEventListener('click', deleteItem);

function foo(e) {
    if (e.keyCode == 13 || e.which == 13) {
        add();
    }
}


function add() {
    //Get Data from Inputes
    var type = document.querySelector('.add__type').value;
    var desc = document.querySelector('.add__description').value;
    var value = parseFloat(document.querySelector('.add__value').value);

    //Check input fields is not empty
    if (desc == '' || Object.is(value, NaN)) {

    } else {
        //Store (inc/exp) Data
        //Generate ID
        var list = data.lists[type];
        if (list.length > 0) {
            var Id = list[list.length - 1].ID + 1;
        } else {
            var Id = 1;
        }
        //Create Object (inc / exp)
        if (type == 'inc') {
            var obj = new Income(Id, desc, value);
        } else {
            var obj = new Expense(Id, desc, value);
        }
        //Add to List
        data.lists[type].push(obj);
        // Update lists UI
        //Generate Html Code debend on (inc/exp)
        if (type == 'inc') {
            var html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else {
            var html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }
        //Replace place holder with real data
        html = html.replace('%id%', Id);
        html = html.replace('%desc%', desc);
        html = html.replace('%value%', value);
        //Insert in the right list
        if (type == 'inc') {
            document.querySelector('.income__list').insertAdjacentHTML('beforeend', html);
        } else {
            document.querySelector('.expenses__list').insertAdjacentHTML('beforeend', html);
        }
        //Calculate Budgate Data
        data.totals[type] += value;
        // budget = income - expences
        data.totals.budget = data.totals.inc - data.totals.exp;
        //Calculate Budgate UI
        document.querySelector('.budget__value').textContent = data.totals.budget;
        document.querySelector('.budget__income--value').textContent = data.totals.inc;
        document.querySelector('.budget__expenses--value').textContent = data.totals.exp;

        //Empty Inputs
        document.querySelector('.add__description').value = '';
        document.querySelector('.add__value').value = '';

        //Focus Desc
        document.querySelector('.add__description').focus();
    }

}

function deleteItem(e) {
    //console.log(e.target.parentNode.parentNode.parentNode.parentNode)
    if (e.target.className == 'ion-ios-close-outline') {
        e.target.parentNode.parentNode.parentNode.parentNode.remove()
    }
}
