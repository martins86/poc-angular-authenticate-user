export class DataUserSession {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public phone: string,
        public mobilephone: string,
        public address: string,
        public city: string,
        public state: string,
        public token: string,
        public id?: number,
    ) {}
}
