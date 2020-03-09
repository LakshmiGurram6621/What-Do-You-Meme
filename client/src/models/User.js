const Users=[
      {Name:'lakshmi',Password:'2020',Email:'lakshmi6621@gmail.com'},
      {Name:'lakshmi1',Password:'2020',Email:'lakshmi66@gmail.com'}


];
export let CurrentUser=null;
export function Login(Email,Password){
    const user=Users.find(x => x.Email == email)
    if(!user) throw Error("user not ofund")
    if(user.Password != password) throw Error("Wrong Password");
    return CurrentUser =user;
}