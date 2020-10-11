# commands

## initializeing

```sh
# add application
npx ng add @nrwl/angular
npx nx g @nrwl/angular:application homepage --routing --strict

# add scully
npm install @scullyio/initgit s
npx nx g @scullyio/init:install -- --project=homepage

# build
ng build --prod
npm run scully

# serve
npm run scully:serve

```
