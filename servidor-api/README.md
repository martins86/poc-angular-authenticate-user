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

## Gerando database authentication

```
# inicial o shell
mongo

# mostra a lista de database
show dbs

# caso não tenha o authentication
use authentication
```

## Gerando massa com o faker

```
cd servidor-api/utils/

node gen_products.js 
node gen_people.js
```

## Confirmando massa

```
mongo

use authentication

db.products.find({})
it
```

<br>
<br>