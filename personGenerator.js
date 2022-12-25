const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Татьяна",
            "id_3": "Ксения",
            "id_4": "Евгения",
            "id_5": "Наталья",
            "id_6": "Валентина",
            "id_7": "Анна",
            "id_8": "Анастасия",
            "id_9": "Елена",
            "id_10": "Виктория"
        }
    }`,

    middleNameJson: `{
        "count": 16,
        "list": {
            "id_1": "Иванович",
            "id_2": "Алексеевич",
            "id_3": "Анатольевич",
            "id_4": "Васильевич",
            "id_5": "Петрович",
            "id_6": "Михайлович",
            "id_7": "Сергеевич",
            "id_8": "Федорович",
            "id_9": "Александрович",
            "id_10": "Николаевич",
            "id_11": "Семёнович",
            "id_12": "Вячеславович",
            "id_13": "Степанович",
            "id_14": "Павлович",
            "id_15": "Григорьевич",
            "id_16": "Борисович"
        }
    }`,

    monthBirthJson: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,
    
    maleJobJson: `{
        "count": 12,
        "list": {
            "id_1": "Дальнобойщик",
            "id_2": "Грузчик",
            "id_3": "Шахтер",
            "id_4": "Сварщик",
            "id_5": "Слесарь",
            "id_6": "Электромонтажник",
            "id_7": "Инженер-строитель",
            "id_8": "Вахтовик-нефтянник",
            "id_9": "Автомонтажник",
            "id_10": "Пожарный",
            "id_11": "Спасатель",
            "id_12": "Военный сапер"
        }
    }`,

    femaleJobJson: `{
        "count": 12,
        "list": {
            "id_1": "Повар",
            "id_2": "Няня",
            "id_3": "Сиделка",
            "id_4": "Медсестра",
            "id_5": "Хостес",
            "id_6": "Уборщица",
            "id_7": "Секретарь",
            "id_8": "Кондитер",
            "id_9": "Бариста",
            "id_10": "Работница call-центра",
            "id_11": "Модель",
            "id_12": "Фотограф"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
// Генерация пола.

    randomGender: function() {

        let gender = this.randomIntNumber();
        return gender === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

// Генерация имени

     randomFirstName: function() {

        if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }

    },

// Генерация фамилии

     randomSurname: function() {
        
        if (this.person.gender == this.GENDER_FEMALE) {
            return (this.randomValue(this.surnameJson) + "a");
        } else {
            return this.randomValue(this.surnameJson);
        }

    },

// Генерация отчества

     randimMiddleName: function() {
        if (this.person.gender == this.GENDER_FEMALE) {
            return (this.randomValue(this.middleNameJson).replace('ич', 'на'));
        } else {
            return (this.randomValue(this.middleNameJson));
        }
     },
     

// Генерация даты рождения

    randomBirthDate: function() {
        let month = this.randomValue(this.monthBirthJson);
        let day;
        if (month === "Февраля") {
            day = this.randomIntNumber (28, 1);
        }
        else if (month === "Апрель" || "Июнь" || "Сентябрь" || "Ноябрь") {
            day = this.randomIntNumber  (30, 1);
        } else {
            day = this.randomIntNumber  (31, 1);
        }
        return day + ' ' + month;
    },

    randomBirthYear: function () {
        return this.randomIntNumber (2000, 1970) + ' ' + 'года';
    },
    
// Генерация профессии

    randomJob: function() {
        if (this.person.gender == this.GENDER_FEMALE) {
            return (this.randomValue(this.femaleJobJson));
        } else {
            return (this.randomValue(this.maleJobJson));
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.middleName = this.randimMiddleName();
        this.person.birthDate = this.randomBirthDate();
        this.person.birthYear = this.randomBirthYear();
        this.person.job = this.randomJob();
        return this.person;
    }
};