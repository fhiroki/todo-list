import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'todo-list';
    taskName = '';

    addTodo() {
        if (!this.taskName) return;

        console.log(this.taskName);
        this.clear();
    }

    clear() {
        this.taskName = '';
    }
}
