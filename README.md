# VulnerTape

This is a simple application on React / Express / PostgreSQL. Check basic vulnerabilities on WordPress sites.

### Usage

You need to have Docker and Node.js.

1. Clone this repository:

```
git clone git@github.com:sofia-kirpi/vulner-tape.git
```

2. Go to the api folder and install needed packages. Repeat it in web folder.

```
npm install
```

3. Go to the api folder and run the next command to start database with Docker:

```
npm run db:dev:start
```

Now your database is on port 5437.

4. Start migrations:

```
npm run db:migrate
```

5. Start seeds:

```
npm run db:seeds
```

6. Now you can run server:

```
npm run dev
```

Now your server is on port 3033.

7. And you can run web:

```
npm start
```

8. Use it on port 3000[http://localhost:3000]

### Gratitude

Theme is here[https://bootswatch.com/vapor/]
