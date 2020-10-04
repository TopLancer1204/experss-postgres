const { Sequelize } = require("sequelize/types");

module.exports =(sequelize, Sequelize) => {
    const usrGameHistory = sequelize.define("user_game_history", {
        user_id: {
            type: Sequelize.STRING,
        },
        score: {
            type: Sequelize.STRING,
        },
        comment: {
            type: Sequelize.STRING,
        }
    })

    return usrGameHistory
}