
import { faker } from "@faker-js/faker"
import Express from "express";

const app = Express();
const port = 8000;

app.get("/api/users/new", (req, res) => {
    res.json({ newUser: createUser() });
});

app.get("/api/companies/new", (req, res) => {
    res.json({ newCompany: createCompany() });
});

app.get("/api/user/company", (req, res) => {
    res.json({ 
        newUser: createUser(),
        newCompany: createCompany()
    });
});

const createUser = () => {
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        _id : faker.datatype.uuid()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id : faker.datatype.uuid(),
        name : faker.company.name(),
        address : {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country
        }
    }
    return newCompany;
}

app.listen( port, () => console.log(`Listening on port: ${port}`) );