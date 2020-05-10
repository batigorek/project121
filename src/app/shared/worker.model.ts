export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id: number;
    phone:string;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

export let MyWorkersDatabase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', type: 0 , phone: '8(944)544-33-21'},
    { id: 2, name: 'Петр', surname: 'Петров', type: 1, phone: '8(944)544-33-21'},
    { id: 3, name: 'Сидр', surname: 'Сидоров', type: 2, phone: '8(944)544-33-21' },
    { id: 4, name: 'Василий', surname: 'Васильев', type: 3, phone: '8(944)544-33-21' },
]