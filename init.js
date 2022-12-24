
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('JobOutput').innerText = initPerson.job;
};

