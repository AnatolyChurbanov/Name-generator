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

   

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        return this.person;
    }
};
