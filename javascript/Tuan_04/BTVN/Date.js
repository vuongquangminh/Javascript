class DateVN {
    constructor(minute, hours, day, month, year) {
        this.minute = minute,
        this.hours = hours ,
        this.day = day ,
        this.month = month ,
        this.year = year
    }

    get getYear() {
        console.log(new Date.getFullYear())
    }
    set getYear(year) {
        console.log(year)
    }
}

const year = new DateVN
console.log(year.getYear)