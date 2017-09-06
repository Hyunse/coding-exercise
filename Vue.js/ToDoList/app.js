var todoItemComponent = {
    template: '#todo-item',
    props: {
        type: {
            type: String
        },
        todo: {
            type: Object
        }
    },
    methods: {
        success: function(todo) {
            todo.type = 'success';
        },
        rollback: function(todo) {
            todo.type = 'active';
        }
    }
};

var todoListComponent = {
    template: '#todo-list',
    props: {
        type: String,
        default: 'active'
    },
    data: function() {
        return {
            todos: [
                {type: 'active', message: '설거지 하기'},
                {type: 'active', message: '빨래하기'},
            ]
        }
    },
    methods: {
    },
    computed: {
        activeTodos: function() {
            return this.todos.filter(function(todo) {
                return todo.type === 'active';
            });
        },
        successTodos: function() {
            return this.todos.filter(function(todo) {
                return todo.type === 'success';
            });
        }
    },
    components: {
        TodoItem: todoItemComponent
    }
};

new Vue({
    el: '#app',
    data: {
        todos: [
            {
                type: 'active',
                message: '빨래'
            },
            {
                type: 'success',
                message: '밥'
            },
        ],
        type:'active',
        inputTodo: ''
    },
    methods: {
        addTodo: function () {
          this.$refs.todoList.todos.push({ 
            type: 'active',
            message: this.inputTodo
          });
          this.inputTodo = '';
        }
    },
    components: {
        TodoList: todoListComponent
    }
});