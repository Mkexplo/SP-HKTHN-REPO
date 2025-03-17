export interface IUserNameValResponse {

    profanity_detected:boolean
    details:IDetail[]
  
  }

  export interface IDetail {
    word: string
    meanings: IMeaning[]
  }


  export interface IMeaning {
    language:string
    meaning:string
    
  }
