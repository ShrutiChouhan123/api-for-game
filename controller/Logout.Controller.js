const LogoutController = {
    logout :(req, res) => {
        console.log('logout success')
        res.status(200).json({ message: "Logout successful" });
      }
}

module.exports = LogoutController;
