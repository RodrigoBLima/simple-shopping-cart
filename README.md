## 💻 Project
Simple application to simule on shooping cart.

## 🚀 Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org/docs/)

# Application
### Server
  - Run ```npm start``` at the root folder

# Application Dockerfile
### Server
  - Run ```docker build -t sample:dev .``` at the root folder
  - And
  - Run ```docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev``` at the root folder

# Application Docker Compose
### Server
  - Run ```docker-compose up -d --build``` at the root folder

# Tests
### Server
  - Run ```npm run test``` at the root folder

## Versioning

For the versions available, see the [My repository](https://github.com/RodrigoBLima).

## Author

* **Rodrigo Barbosa** - *Initial Work* - [RodrigoBLima](https://github.com/RodrigoBLima)

# License
[MIT License](/LICENSE)

---

Builded with ♥