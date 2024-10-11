const login = async (req,res)=>{
    res.send('fake login/register/sign in')
}

const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).send({message:"ello john doe",luckyNumber})
}

module.exports ={login,dashboard}