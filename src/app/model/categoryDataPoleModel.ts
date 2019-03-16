export class categoryDataPoleModel {
    public ques: string;
    public data: Array<{id:number,  text:string, count:number }>;
    constructor(ques: string, data: Array<{id:number,  text:string, count:number }>) {
        this.ques = ques;
        this.data = data;
    }
}