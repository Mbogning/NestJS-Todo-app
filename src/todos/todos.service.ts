import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    todos = [
        {
            id: 1,
            title: 'todo app',
            description: 'Create nest todo app'
        },
        {
            id: 2,
            title: 'todo app app 1',
            description: 'Create nest todo app'
        },
        {
            id: 3,
            title: 'todo app 2',
            description: 'Create nest todo app'
        },
        {
            id: 4,
            title: 'todo app 3',
            description: 'Create nest todo app'
        },
        {
            id: 5,
            title: 'todo app 4',
            description: 'Create nest todo app'
        },
        {
            id: 6,
            title: 'todo app 5',
            description: 'Create nest todo app'
        },
    ];

    findAll(): any[] {
        return this.todos;
    }
}
