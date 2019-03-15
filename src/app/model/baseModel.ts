import { likesModel } from './likesModel';
import { categoryModel } from './categoryModel';

export class baseModel {
    public id: string;
    public profilename: string;
    public profilepic: string;
    public date: Date;
    public likesData: likesModel;
    public categoryData: categoryModel;

    constructor(id: string, profilename: string, profilepic: string, date: Date, likesData: likesModel,
        categoryData: categoryModel) {
        this.profilename = profilename;
        this.profilepic = profilepic;
        this.date = date;
        this.likesData = likesData;
        this.categoryData = categoryData;
    }
}