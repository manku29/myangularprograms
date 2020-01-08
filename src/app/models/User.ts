export interface User{
    firstName :string,
    lastName : string,
    email: string,
    address? : { // question mark make fields optionals
         street? : string,
         city? : string,
         state? : string
    } ,
    isActive?:boolean,
    registered?:any,
    hide?: boolean
}