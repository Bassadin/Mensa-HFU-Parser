export function dateToDateTabString(date: Date) {
    const dayNumber = date.getDay();

    const prefix: string = "tab-";

    let suffix: string;

    switch (dayNumber) {
        case 1:
            suffix = "mon";
            break;
        case 2:
            suffix = "tue";
            break;
        case 3:
            suffix = "wed";
            break;
        case 4:
            suffix = "thu";
            break;
        case 5:
            suffix = "fri";
            break;
        default:
            return null;
    }

    return prefix + suffix;
}
