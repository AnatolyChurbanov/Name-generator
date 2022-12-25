
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText ='';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDateOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('JobOutput').innerText = '';
}

document.getElementById('start').addEventListener ('click', () =>
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('JobOutput').innerText = initPerson.job;
});

document.getElementById('reset').addEventListener ('click', () =>
{
    
    document.getElementById('firstNameOutput').innerText ='';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDateOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('JobOutput').innerText = '';
})