export interface ITask {
  readonly _id: string,
  createdBy: string,
  description: string | null | undefined,
  status: number,
  title: string
  updatedAt: Date
  createdAt: Date,
}
