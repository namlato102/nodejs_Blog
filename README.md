
Express - handlebars
Directory Structure:
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

views/layouts/main.handlebars:
The main layout is the HTML page wrapper which can be reused for the different views of the app. 
{{{body}}} is used as a placeholder for where the main content should be rendered.

views/home.handlebars:
The content for the app's home view which will be rendered into the layout's {{{body}}}.

src:
    public folder:
        quan ly file tinh css, img
    
    resources:
        view:
            render ra ung dung nodejs bang handlebar -> quan ly ve layout va partial
        scss:
            tich hop css reposition de viet css nhanh hon