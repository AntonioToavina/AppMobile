export class Util {
  formatDate(date: string) {
    var array = date.split("T");
    var heure = array[1].split(".");

    return array[0] + " " + heure[0];
  }
}
