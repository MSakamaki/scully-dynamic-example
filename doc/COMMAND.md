# commands

## initializeing

```sh
# add application
npx ng add @nrwl/angular
npx nx g @nrwl/angular:application homepage --routing --strict

# add scully
npm install @scullyio/initgit
npx nx g @scullyio/init:install -- --project=homepage

# build
npx ng build --prod
npm run scully

# serve
npx ng build && npm run scully && npm run scully:serve


## blog
npx ng generate @scullyio/init:blog

npx ng generate module home --route=home --module=app


```

### blog

```sh
npx ng generate @scullyio/init:post --name="This is my post"



```
