
const GameController = {
    dashboard: async (req, res) => {
    console.log('game control')
    res.status(200).json({ message: "Game Dashboard" });
  },
};

module.exports = GameController;
