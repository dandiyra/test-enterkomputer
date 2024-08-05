
**Server:** Node, Express

**DataBase:** postgres/mysql, typeorm


## Run Locally


Install dependencies

```bash
  npm install
```

Start the tsc

```bash
  npm run watch
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`TOKEN_SECRET`

`REFRESH_TOKEN_SECRET`





## API Reference
#### Create Role

```http
  POST /role/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Your API key |
#### Create user

```http
  POST /user/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. Your API key |
| `lastName`      | `string` | **Required**. Your API key |
| `email`      | `string` | **Required**. Your API key |
| `password`      | `string` | **Required**. Your API key |
| `phoneNumber`      | `number` | **Required**. Your API key |

#### login user

```http
  POST /user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Your API key |
| `password`      | `string` | **Required**. Your API key |


#### Get all users

```http
  GET /user/list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. Your API key |
| `firstName` | `string` | **Required**. Your API key |
| `lastName` | `string` | **Required**. Your API key |
| `email` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |
| `profileImage` | `string` | **Required**. Your API key |
| `isActive` | `boolean` | **Required**. Your API key |
| `phoneNumber` | `number` | **Required**. Your API key |
| `tocken` | `string` | **Required**. Your API key |
| `refreshToken` | `string` | **Required**. Your API key |

#### Create Product

```http
  POST /produk/store
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. Your API key |
| `name` | `string` | **Required**. Your API key |
| `price` | `number` | **Required**. Your API key |
| `quantity` | `number` | **Required**. Your API key |

#### Get List Product

```http
  GET /produk/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. Your API key |
| `name` | `string` | **Required**. Your API key |
| `price` | `number` | **Required**. Your API key |
| `quantity` | `number` | **Required**. Your API key |

#### Get Product By Id

```http
  GET /produk/id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. Your API key |
| `name` | `string` | **Required**. Your API key |
| `price` | `number` | **Required**. Your API key |
| `quantity` | `number` | **Required**. Your API key |

#### Update Product

```http
  PUT /produk/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. Your API key |
| `name` | `string` | **Required**. Your API key |
| `price` | `number` | **Required**. Your API key |
| `quantity` | `number` | **Required**. Your API key |


#### Delete Product

```http
  DELETE /produk/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. Your API key |
| `name` | `string` | **Required**. Your API key |
| `price` | `number` | **Required**. Your API key |
| `quantity` | `number` | **Required**. Your API key |



