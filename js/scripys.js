// вариант 1

let Contacts = function() {
    this.info = function(){
        this.fio = prompt('Введите Ваше ФИО');
        this.age = +prompt('Введите Ваш возраст');
        this.phone = prompt('Введите Ваш номер телефона');
        this.email = prompt('Введите Вашу эл. почту');

        this.checkAge();
    }
    this.checkAge = function(){
        if (Math.abs(this.age) >= 18) {
            alert('Доступ разрешен')
        } else {
            alert('Доступ запрещен')
        }

        this.show();
    }
    this.show = function(){
        document.write('ФИО: ' + this.fio + `<br>` + `Возвраст: ` + this.age + `<br>` + `Телефон: ` + this.phone + `<br>` + 'Эл. Почта: ' + this.email + `<br>`);
    }   
}

let user = new Contacts(),
    user2 = new Contacts(),
    user3 = new Contacts();

user.info();
user2.info();
user3.info();

// вариант 2

/* function FIO(fam, name, otch) {
    this.fam = fam;
    this.name = name;
    this.otch = otch;
}
function Contact(fio, age, email, tel) {
    this.fio = fio;
    this.age = age;
    this.email = email;
    this.tel = tel;
}

class Contacts {
    _contactBook = [];
    contactBookGet(fioI){
        for(let i=0;i<this._contactBook.length;i++){
        if(fioI.fam==this._contactBook[i].fam && fioI.name==this._contactBook[i].name && fioI.otch == this._contactBook[i].otch){
        return this._contactBook[i];
        }
        }
        return "No match";
        }
    set contactBook(con) {
        if (con) {
            this._contactBook.push(con);
        }
        else {
            alert("Нет информации");
        }
    }
    #checkAge(value) {
        if (+value >= 18) {
            return true;
        } else {
            return false;
        }
    }
    addContact() {
        let con = new Contact(new FIO(prompt("Введите фамилию:"),
            prompt("Введите имя:"),
            prompt("Введите отчество:")),
            +prompt("Введите возраст:"),
            prompt("Введите эл. почту:"),
            prompt("Введите телефон:"));
        if (this.#checkAge(con.age)) {
            return con;
        }
        else {
            alert("Доступ запрещен");
        }
    }
    showAll() {
        if (this._contactBook[0]) {
            for (let i = 0; i < this._contactBook.length; i++) {
                document.write('ФИО: ' + this._contactBook[i].fio.fam + ` ` + this._contactBook[i].fio.name + ` ` + this._contactBook[i].fio.otch + ` ` + `Возвраст: ` + this._contactBook[i].age + ` ` + `Телефон: ` + this._contactBook[i].tel + ` ` + 'Эл. Почта: ' + this._contactBook[i].email + `<br>`);
            }
        }
        else {
            alert("Нет информации");
        }
    }
}

let Book = new Contacts();
Book.contactBook = Book.addContact();
Book.contactBook=Book.addContact();
Book.contactBook=Book.addContact(); 
Book.showAll(); */