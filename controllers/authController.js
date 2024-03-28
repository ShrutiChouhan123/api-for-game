class AuthController {
    login(req, res) {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required' });
      }
  
      console.log(email,password)
      res.status(200).json({ message: 'Login successful', email, password });
    }
  }
  
  module.exports = new AuthController();
  