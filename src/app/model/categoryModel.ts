import { categoryDataModel } from './categoryDataModel';

export class categoryModel {
    public type: number;
    public data: categoryDataModel;

    constructor(type: number, data: categoryDataModel) {
        this.type = type;
        this.data = data;
    }
}