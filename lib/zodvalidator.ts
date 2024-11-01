import z from 'zod';
export const userSchema = z.object({
    name : z.string(),
    email : z.string(),
    password : z.string().min(8),
    bio : z.string().optional(),
    username : z.string(),
    image : z.string().optional(),
    dateOfBirth : z.string()
});

export const postSchema = z.object({
    about : z.string(),
    image : z.string()
});