const userBirthYear = +prompt("Ваш рік народження?");
const userCity = prompt("Введіть місто в якому живете: ");
const userFavSport = prompt("Ваш улюблений вид спорту?");
const currentYear = 2024;
let userAge;
let userEnteredCity;
let userNextChamp;

if (userBirthYear === '') {
    userAge = "Ваш вік " +  (currentYear - userBirthYear) + " років";
} else {
    userAge = 'Шкода, що Ви не захотіли ввести свій вік'

}

if (userCity === 'Київ') {
userEnteredCity = '\nТи живеш у столиці України, ' + userCity;
} else if (userCity === 'Вашингтон') {
    userEnteredCity = '\nТи живеш у столиці Сполучених Штатів Америки,круто!)'
} else if (userCity === 'Лондон') {
    userEnteredCity = '\nТи живеш у столиці Великобританії, ' + userCity;
} else if (userCity === '') {
    userEnteredCity = "\nВи не ввели місто,спробуйте ще раз!"
} else (
    userEnteredCity = '\nТи живеш у місті ' + userCity
)

if (userFavSport === 'Бокс') {
    userNextChamp = '\nКруто,хочеш стати як Мухамед Алі?'
} else if (userFavSport === "Баскетбол") {
    userNextChamp = "\nТак тримати,будеш як Майкл Джордан!"
} else if (userFavSport === "Футбол") {
    userNextChamp = "\nВау,ти обов'язково станеш наступним Крістану Роналдо!"
} else if (userFavSport === '') {
    userNextChamp = '\nНажаль ти не ввів сюди свій улюблений вид спорту :('
}

alert(userAge + userEnteredCity + userNextChamp);