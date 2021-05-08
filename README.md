## Poc Angular + Express + MongoDB = Autenticando usuário

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

<br>
<br>

## Gerando um novo projeto web

```
ng new aplicacao-web --routing=true --strict=true --style=scss
```

<br>
<br>

## Gerando um novo projeto api

```
mkdir servidor-api
cd servidor-api/

npm init

npm install express --save
npm install mongoose --save
npm install cors --save
npm install body-parser --save
npm install faker --save
npm install bcryptjs --save
npm install jsonwebtoken --save
```

<br>
<br>


## Gerando massa com o faker

```
cd utils/

node gen_products.js 
node gen_people.js
```

## Confirmando massa

```
mongo

Use authentication

db.products.find({})
```

<br>
<br>

[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-angular-authenticate-user
