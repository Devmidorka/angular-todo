
export enum status{
  inProgress = 0,
  completed = 1
}

export class Task{
  constructor(
    private _id:number,
    private _title: string,
    private _status: status,
    private _description?: string
  ) {}

  get id(){
    return this._id
  }

  get title(){
    return this._title
  }

  get status(){
    return this._status
  }

  get description(){
    return this._description
  }

  set status(newStatus){
    this._status = newStatus
  }

  set description(newDescription){
    this._description = newDescription
  }

  toggleStatus(){
    if(this.status === status.completed){
      this.status = status.inProgress
      return
    }
    this.status = status.completed
  }

}
