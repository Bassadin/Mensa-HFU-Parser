export default class Meal {
    private _eatingMethod: EATING_METHOD;
    private _mealNames: string[];

    get eatingMethod() {
        return this._eatingMethod;
    }

    get mealNames() {
        return this._mealNames;
    }

    constructor(eatingMethod: EATING_METHOD, mealNames: string[]) {
        this._eatingMethod = eatingMethod;
        this._mealNames = mealNames;
    }
}
