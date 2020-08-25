# Template Vue Django - Template for creating Django backend serving Vue.js frontend

This repository contains code for the base template for django - vue website.

### Application Layout

This application has clear separation and uses Vue.js for front end rendering and Django as its backend:

- Frontend & asset bundling: Vue, Yarn and Webpack
- Data models, Web API and server: Django with Django REST framework

Django serves:

- the application entry point (`index.html` + bundled assets) at `/`
- data at `/api/`
- static files at `/static/`
- admin panel is available at `/admin/`

The application templates from Vue CLI `create` and Django `createproject` are kept as close as possible to their
original state, except where a different configuration is needed for better integration of the two frameworks.

### Repo Includes

- Django
- Django REST framework
- Django Whitenoise, CDN Ready - allows faster loading of assets loading via dedicated [AWS CloudFront](https://aws.amazon.com/cloudfront/)
- Vue CLI 3
- Vue Router
- Vuex
- Gunicorn
- Heroku configuration for deployment

### Application Structure

| Location             | Content                                          |
| -------------------- | ------------------------------------------------ |
| `/backend`           | Django Project & Backend Config                  |
| `/backend/api`       | Django App (`/api`)                              |
| `/src`               | Vue App                                          |
| `/src/components`    | Reusable components in Vue App                   |
| `/src/views`         | Standard views for Vue App                       |
| `/src/main.js`       | JS Application Entry Point                       |
| `/public/index.html` | Html Application Entry Point (`/`)               |
| `/public/static`     | Static Assets                                    |
| `/dist/`             | Bundled Assets Output (generated at `yarn build` |

## Prerequisites

Before getting started you should have the following installed and running:

- [x] Yarn - [instructions](https://yarnpkg.com/en/docs/install)
- [x] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)
- [x] Python 3 - [instructions](https://wiki.python.org/moin/BeginnersGuide)
- [x] Pipenv - [instructions](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)

## Setup

```shell
$ git clone https://github.com/wesleyhutchinson/gpbench
$ cd gpbench
```

Setup

```shell
$ yarn install
$ pipenv install --dev && pipenv shell
$ python manage.py migrate
```

## Running Development Servers

```shell
$ python manage.py runserver
```

From another tab in the same directory:

```shell
$ yarn serve
```

The Vue application will be served from [`localhost:8080`](http://localhost:8080/) and the Django API
and static files will be served from [`localhost:8000`](http://localhost:8000/).

The dual dev server setup allows you to take advantage of
webpack's development server with hot module replacement.
Proxy config in [`vue.config.js`](/vue.config.js) is used to route the requests
back to Django's API on port 8000.

If you would rather run a single dev server, you can run Django's
development server only on `:8000`, but you have to build build the Vue app first
and the page will not reload on changes.

```shell
$ yarn build
$ python manage.py runserver
```

### Creating an Admin Superuser

In order to have staff user privileges, overview or users and models you can create a superuser account:

```shell
$ python manage.py createsuperuser
Email:
Password:
```

Then enter your username and password into the admin portal of the site at [`localhost:8000/api/admin`](http://localhost:8000/api/admin).

## Deploy

- Set `ALLOWED_HOSTS` on [`backend.settings.prod`](/backend/settings/prod.py)

### Heroku Server

```shell
$ heroku apps:create gpbench
$ heroku git:remote --app gpbench
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/python
$ heroku addons:create heroku-postgresql:hobby-dev
$ heroku config:set DJANGO_SETTINGS_MODULE=backend.settings.prod
$ heroku config:set DJANGO_SECRET_KEY='...(your django SECRET_KEY value)...'

$ git push heroku
```

Heroku's nodejs buildpack will handle install for all the dependencies from the [`package.json`](/package.json) file.
It will then trigger the `postinstall` command which calls `yarn build`.
This will create the bundled `dist` folder which will be served by whitenoise.

The python buildpack will detect the [`Pipfile`](/Pipfile) and install all the python dependencies.

The [`Procfile`](/Procfile) will run Django migrations and then launch Django'S app using gunicorn, as recommended by heroku.

## Static Assets

See `settings.dev` and [`vue.config.js`](/vue.config.js) for notes on static assets strategy.

Django Whitenoise to serves all static files and Vue bundled files at `/static/`.
Use [`vue.config.js`](/vue.config.js) > `baseUrl` option to set point all your assets to the CDN,
and then set your CDN's origin back to your domains `/static` url.

Whitenoise will serve static files to your CDN once, but once cached, assets are served directly by the CDN.

[Cloudfront Setup Wiki](https://github.com/wesleyhutchinson/gpbench/wiki/Setting-up-a-CDN-with-CloudFront)
