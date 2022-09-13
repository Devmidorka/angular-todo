
export enum status{
  inProgress = 0,
  completed = 1
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

  set status(newStatus){
    this._status = newStatus
  }

  toggleStatus(){
    if(this.status === status.completed){
      this.status = status.inProgress
      return
    }
    this.status = status.completed
  }

}
