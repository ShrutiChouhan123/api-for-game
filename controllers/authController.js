class AuthController {
    login(req, res) {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required' });
      }
  
      // In a real application, you would perform authentication here
      // For demonstration, let's simply echo back the provided credentials
      console.log(email,password)
      res.status(200).json({ message: 'Login successful', email, password });
    }
  }
  
  module.exports = new AuthController();
  