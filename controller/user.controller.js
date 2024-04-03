let board = Array(9).fill(null);
let nextPlayer = "X";
let winner = null;

const userController = {
  dashboard: async (req, res) => {
    console.log("game control");
    res.status(200).json({ message: "Game Dashboard" });
  },
  startgame: async (req, res) => {
    board = Array(9).fill(null);
    nextPlayer = "X";
    winner = null;
    res.status(200).json({ message: "New game started" });
  },
  makemove: async (req, res) => {
    const { index } = req.body;
    res.status(200).json({ message: "Move made successfully" });
  },
};

module.exports = userController;
