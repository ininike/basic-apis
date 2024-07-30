import { usersdb } from "../config/userData.js"


export const registrationController = {
    getPage: (req, res) => {

    },

    postRegistration: async(req, res) => {
        console.log(req.body);
        await usersdb.query(`insert into users (username, email, password) values ("${req.body.username}","${req.body.email}","${req.body.password}","${req.body.firstName}","${req.body.lastName}");`)
        return res.json('registered');
    }


}

export const signinController = {
    getPage: (req, res) => {

    },

    postSignIn: async (req,res) => {
        const [userDetails] = await usersdb.query(`select * from users where username = "${req.body.username}"`);
        if(userDetails[0] == undefined || userDetails[0].password !== req.body.password){
            return res.json('invalid username or password')
        }             
        return res.json(`sign in successful ${userDetails[0].first_name}`);
    }
}