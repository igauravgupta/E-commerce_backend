const bcrypt = require("bcryptjs");
const hashPassword = async (password)=>{
    try {
        const salt= await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);

    } catch (error) {
        console.log(error);
    }}   

const validatePassword = async(password,savedPassword)=>{
    try {
        return await bcrypt.compareSync(password, savedPassword);   
    } catch (error) {
        console.log(error);
    }
}
module.exports ={hashPassword,validatePassword};