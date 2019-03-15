import { locationDataModel } from './locationDataModel'
export class categoryDataModel {
    public imageURL: string;
    public location: locationDataModel;

    constructor(imageURL: string, location: locationDataModel) {
        this.imageURL = imageURL;
        this.location = location;
    }
}