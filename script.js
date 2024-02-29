const userBirthYear = +prompt("Ваш рік народження?");
const userCity = prompt("Введіть місто в якому живете: ");
const userFavSport = prompt("Ваш улюблений вид спорту?");
const currentYear = 2024;
let userAge;
let userEnteredCity;
let userNextChamp;

if (userBirthYear == "") {
    userAge = "Шкода, що Ви не захотіли ввести свій вік";
} else {
    userAge = "Ваш вік " +  (currentYear - userBirthYear) + " років";
}


switch (userCity) {
    case 'Київ':
        userEnteredCity = '\nТи живеш у столиці України, ' + userCity;
        break;
    case 'Вашингтон':
        userEnteredCity = '\nТи живеш у столиці Сполучених Штатів Америки, круто!)';
        break;
    case 'Лондон':
        userEnteredCity = `\nТи живеш у столиці Великобританії, ${userCity}`;
        break;
    case '':
        userEnteredCity = "\nВи не ввели місто, спробуйте ще раз!";
        break;
    default:
        userEnteredCity = `\nТи живеш у місті ${userCity}`;
}


switch (userFavSport) {
    case 'Бокс':
        userNextChamp = '\nКруто, хочеш стати як Мухамед Алі?';
        break;
    case 'Баскетбол':
        userNextChamp = "\nТак тримати, будеш як Майкл Джордан!";
        break;
    case 'Футбол':
        userNextChamp = "\nВау, ти обов'язково станеш наступним Крістіану Роналдо!";
        break;
    case '':
        userNextChamp = '\nНажаль, ти не ввів свій улюблений вид спорту :(';
        break;
    default:
        userNextChamp = "\nПоки що доступні варіанти: Бокс, баскетбол і футбол.Але це поки,навчання продовжується:)";
        break;
}


alert(userAge + userEnteredCity + userNextChamp);