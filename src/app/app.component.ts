import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'todo-list';
    taskName = '';
    todos = [];

    addTodo() {
        if (!this.taskName) return;

        this.todos.push(this.taskName);
        this.taskName = '';
    }
}
