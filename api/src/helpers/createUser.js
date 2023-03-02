import Users from "../models/users.js"

export default async function createUser({name , last_name , image_avatar , email, password , user_name , type_account , notifications , activity }){
      
   await Users.create({
          name,
          last_name,
          image_avatar,
          email,
          password,
          user_name,
          type_account,
          notifications, 
          activity
      })
    
}