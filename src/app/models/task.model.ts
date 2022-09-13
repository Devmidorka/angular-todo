
export enum status{
  completed,
  isProgress
}

export class Task{
  constructor(private _id:number, private _title: string, private _status: status) {}

  get id(){
    return this._id
  }

  get title(){
    return this._title
  }

  get status(){
    return this._status
  }

}
