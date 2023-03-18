export class Survey {
    public _id?:string;
    public name:string | undefined;
    public email!: string;
    public gender!: string;
    public age!: string;
    public address!: number;
    public city!: string;
    public zip!: number;
    public province!: string;
    public country!: string;
    public coronaAffected!: boolean;
}
