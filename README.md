# speedtest.net - MySQL Bridge

This bridge is used to store speedtest results in a MySQL database.

## Requirements

- speedtest.net CLI (https://www.speedtest.net/de/apps/cli)
- NodeJS (https://nodejs.org/en)

## Installation

Download - Project-Files

```
git clone https://github.com/qMalte/Speedtest
```

Download - Dependencies

```
npm install
```

```
npm install -g knex
```

## Configuration

In the .env configuration, the connection information to the MySQL database must be specified. As well as the attribute: INTERVAL must be configured. The interval must be specified in the general cronjob syntax.

```
cp .env.example .env
```

```
nano .env
```

## Database Preparation

```
knex migrate:latest
```

## Start Application

```
node app.js
```

## Optional - Setup Autostart

```
npm install -g pm2
```

```
pm2 start app.js
```

```
pm2 startup
```

```
pm2 save
```
