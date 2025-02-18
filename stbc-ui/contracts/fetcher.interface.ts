import IEntity from "./entity.interface";

export default interface IFetcher<T extends IEntity>{
    call(source: string, max: number, skip: number): Promise<Array<T>>
}