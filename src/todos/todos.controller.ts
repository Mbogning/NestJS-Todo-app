import { TodosService } from './todos.service';
import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get()
    findAll():any[]{
        return this.todosService.findAll(); 
    }
}
