import bcrypt from 'bcrypt';

export async function hashPassword(password:string,){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password,salt);
    return hashPassword; 
}