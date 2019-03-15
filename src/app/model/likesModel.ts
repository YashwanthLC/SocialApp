import { likesDataModel } from './likesDataModel';

export class likesModel {
    public count: number;
    public data: likesDataModel;

    constructor(count: number, data: likesDataModel) {
        this.count = count;
        this.data = data;
    }

}